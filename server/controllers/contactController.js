import { Inquiry } from '../models/Inquiry.js';
import { isConnected } from '../config/db.js';
import { memoryStore } from '../utils/seedData.js';
import { sendContactNotification } from '../utils/emailService.js';
import { broadcastInquiry } from '../socket.js';

export const submitContact = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      companyName,
      service,
      budget,
      timeline,
      message,
      referralSource
    } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ message: 'Full Name, Email, and Message are required fields.' });
    }

    const attachmentPath = req.file ? `/uploads/${req.file.filename}` : null;

    const inquiryPayload = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || '').trim(),
      companyName: (companyName || '').trim(),
      service: (service || 'General Inquiry').trim(),
      budget: (budget || '₹1,00,000 - ₹5,00,000').trim(),
      timeline: (timeline || '1 - 3 Months').trim(),
      message: message.trim(),
      referralSource: referralSource || 'Direct Search',
      attachment: attachmentPath,
      status: 'New',
      createdAt: new Date()
    };

    let savedInquiry;
    if (isConnected) {
      const newInquiry = new Inquiry(inquiryPayload);
      savedInquiry = await newInquiry.save();
    } else {
      savedInquiry = {
        ...inquiryPayload,
        _id: `inq-${Date.now()}`
      };
      memoryStore.inquiries.unshift(savedInquiry);
    }

    // Convert Mongoose doc to plain JS object to ensure no fields are lost
    const plainInquiry = savedInquiry?.toObject ? savedInquiry.toObject() : savedInquiry;

    // Broadcast real-time event to connected admin portals
    broadcastInquiry(plainInquiry);

    // Trigger async email notification to admin & confirmation to client
    sendContactNotification(plainInquiry).catch(err => {
      console.warn('[Contact Email Dispatch Error]:', err.message);
    });

    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully. Our enterprise team will respond within 24 hours.',
      inquiry: plainInquiry
    });
  } catch (err) {
    console.error('[Submit Contact Error]:', err);
    return res.status(500).json({ message: 'Internal server error processing inquiry', error: err.message });
  }
};

export const getInquiries = async (req, res) => {
  try {
    const { status, service, search } = req.query;

    if (isConnected) {
      let query = {};
      if (status && status !== 'All') {
        query.status = status;
      }
      if (service && service !== 'All') {
        // Flexible case-insensitive partial match so 'Cybersecurity' matches 'Cybersecurity & Zero Trust' etc.
        query.service = { $regex: service, $options: 'i' };
      }
      if (search) {
        query.$or = [
          { fullName: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
          { companyName: { $regex: search, $options: 'i' } },
          { message: { $regex: search, $options: 'i' } }
        ];
      }

      const inquiries = await Inquiry.find(query).sort({ createdAt: -1 });
      return res.json(inquiries);
    } else {
      // Memory Store search & filter
      let results = [...memoryStore.inquiries];
      if (status && status !== 'All') {
        results = results.filter(i => i.status === status);
      }
      if (service && service !== 'All') {
        const s = service.toLowerCase();
        results = results.filter(i => i.service && i.service.toLowerCase().includes(s));
      }
      if (search) {
        const q = search.toLowerCase();
        results = results.filter(i => 
          (i.fullName && i.fullName.toLowerCase().includes(q)) ||
          (i.email && i.email.toLowerCase().includes(q)) ||
          (i.companyName && i.companyName.toLowerCase().includes(q)) ||
          (i.message && i.message.toLowerCase().includes(q))
        );
      }
      results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return res.json(results);
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error retrieving inquiries', error: err.message });
  }
};

export const updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminNotes } = req.body;

    if (isConnected) {
      const inquiry = await Inquiry.findById(id);
      if (!inquiry) {
        return res.status(404).json({ message: 'Inquiry not found' });
      }
      if (status) inquiry.status = status;
      if (adminNotes !== undefined) inquiry.adminNotes = adminNotes;
      await inquiry.save();
      return res.json(inquiry);
    } else {
      const inquiry = memoryStore.inquiries.find(i => String(i._id) === String(id));
      if (!inquiry) {
        return res.status(404).json({ message: 'Inquiry not found' });
      }
      if (status) inquiry.status = status;
      if (adminNotes !== undefined) inquiry.adminNotes = adminNotes;
      return res.json(inquiry);
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error updating inquiry', error: err.message });
  }
};

export const replyToInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const { replyMessage } = req.body;

    if (!replyMessage) {
      return res.status(400).json({ message: 'Reply message cannot be blank.' });
    }

    let inquiry;
    if (isConnected) {
      inquiry = await Inquiry.findById(id);
      if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' });
      inquiry.replies.push({
        sentAt: new Date(),
        sender: req.user.name || 'Enterprise Admin',
        message: replyMessage
      });
      inquiry.status = 'In Progress';
      await inquiry.save();
    } else {
      inquiry = memoryStore.inquiries.find(i => String(i._id) === String(id));
      if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' });
      if (!inquiry.replies) inquiry.replies = [];
      inquiry.replies.push({
        sentAt: new Date(),
        sender: req.user.name || 'Enterprise Admin',
        message: replyMessage
      });
      inquiry.status = 'In Progress';
    }

    return res.json({ success: true, message: 'Reply sent and logged.', inquiry });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;

    if (isConnected) {
      await Inquiry.findByIdAndDelete(id);
    } else {
      memoryStore.inquiries = memoryStore.inquiries.filter(i => String(i._id) !== String(id));
    }

    return res.json({ success: true, message: 'Inquiry deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Error deleting inquiry', error: err.message });
  }
};

export const exportInquiriesCsv = async (req, res) => {
  try {
    let items = [];
    if (isConnected) {
      items = await Inquiry.find().sort({ createdAt: -1 });
    } else {
      items = memoryStore.inquiries;
    }

    const headers = ['ID', 'Full Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Timeline', 'Status', 'Date', 'Message'];
    const rows = items.map(item => [
      `"${item._id}"`,
      `"${(item.fullName || '').replace(/"/g, '""')}"`,
      `"${item.email || ''}"`,
      `"${item.phone || ''}"`,
      `"${(item.companyName || '').replace(/"/g, '""')}"`,
      `"${item.service || ''}"`,
      `"${item.budget || ''}"`,
      `"${item.timeline || ''}"`,
      `"${item.status || ''}"`,
      `"${new Date(item.createdAt).toISOString()}"`,
      `"${(item.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="techofay-inquiries.csv"');
    return res.send(csvContent);
  } catch (err) {
    return res.status(500).json({ message: 'CSV export error', error: err.message });
  }
};
