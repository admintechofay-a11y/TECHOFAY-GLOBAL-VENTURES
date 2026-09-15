import { Inquiry } from '../models/Inquiry.js';
import { Application } from '../models/Application.js';
import { DemoRequest } from '../models/DemoRequest.js';
import { BlogPost } from '../models/BlogPost.js';
import { isConnected } from '../config/db.js';
import { memoryStore } from '../utils/seedData.js';

export const getDashboardMetrics = async (req, res) => {
  try {
    let inquiries = [];
    let applications = [];
    let demoRequests = [];
    let blogPosts = [];

    if (isConnected) {
      inquiries = await Inquiry.find().sort({ createdAt: -1 });
      applications = await Application.find().sort({ createdAt: -1 });
      demoRequests = await DemoRequest.find().sort({ createdAt: -1 });
      blogPosts = await BlogPost.find().sort({ createdAt: -1 });
    } else {
      inquiries = [...memoryStore.inquiries].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      applications = [...memoryStore.applications].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      demoRequests = [...memoryStore.demoRequests].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      blogPosts = [...memoryStore.blogPosts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    const totalInquiries = inquiries.length;
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const newThisWeek = inquiries.filter(i => new Date(i.createdAt) >= oneWeekAgo).length;
    const pendingInquiries = inquiries.filter(i => i.status === 'New' || i.status === 'In Progress').length;
    const resolvedInquiries = inquiries.filter(i => i.status === 'Resolved').length;

    // Aggregated by vertical for Recharts (including flagships)
    const verticals = [
      'Cybersecurity',
      'ERP Software',
      'Hospital HMS',
      'School Software',
      'Hotel HMS',
      'Transport & Fleet',
      'Engineering & QA',
      'AI Systems',
      'Cloud Architecture'
    ];

    const inquiriesByVertical = verticals.map(v => {
      const count = inquiries.filter(i => i.service === v || (i.service && i.service.includes(v.split(' ')[0]))).length;
      return { vertical: v, count };
    });

    // Monthly leads trend calculated accurately from recorded inquiries & demo requests
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonthIndex = now.getMonth();
    const monthlyLeadsTrend = [];
    for (let i = 5; i >= 0; i--) {
      const targetDate = new Date(now.getFullYear(), currentMonthIndex - i, 1);
      const mName = months[targetDate.getMonth()];
      const inqCount = inquiries.filter(inq => {
        const d = new Date(inq.createdAt);
        return d.getMonth() === targetDate.getMonth() && d.getFullYear() === targetDate.getFullYear();
      }).length;
      const demoCount = demoRequests.filter(req => {
        const d = new Date(req.createdAt);
        return d.getMonth() === targetDate.getMonth() && d.getFullYear() === targetDate.getFullYear();
      }).length;
      monthlyLeadsTrend.push({ month: mName, inquiries: inqCount, demos: demoCount });
    }

    // Safely formatted recent inquiries to guarantee no undefined values in the UI
    const formattedRecentInquiries = inquiries.slice(0, 8).map(inq => {
      const item = inq.toObject ? inq.toObject() : inq;
      return {
        _id: String(item._id),
        fullName: item.fullName || item.name || 'Enterprise Client',
        companyName: item.companyName || item.company || item.email || 'Direct Inquiry',
        email: item.email || '',
        service: item.service || 'General Consultation',
        budget: item.budget || 'Custom / Flexible',
        timeline: item.timeline || '1 - 3 Months',
        status: item.status || 'New',
        createdAt: item.createdAt || new Date().toISOString()
      };
    });

    return res.json({
      stats: {
        totalInquiries,
        newThisWeek,
        pendingInquiries,
        resolvedInquiries,
        totalApplications: applications.length,
        totalDemoRequests: demoRequests.length,
        totalBlogPosts: blogPosts.length
      },
      charts: {
        inquiriesByVertical,
        monthlyLeadsTrend
      },
      recentInquiries: formattedRecentInquiries
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error compiling dashboard metrics', error: err.message });
  }
};

export const getSettings = async (req, res) => {
  return res.json(memoryStore.settings);
};

export const updateSettings = async (req, res) => {
  try {
    const { companyName, tagline, email, phone, address, socials, smtpHost, smtpPort } = req.body;
    memoryStore.settings = {
      ...memoryStore.settings,
      companyName: companyName || memoryStore.settings.companyName,
      tagline: tagline || memoryStore.settings.tagline,
      email: email || memoryStore.settings.email,
      phone: phone || memoryStore.settings.phone,
      address: address || memoryStore.settings.address,
      smtpHost: smtpHost || memoryStore.settings.smtpHost,
      smtpPort: smtpPort || memoryStore.settings.smtpPort,
      socials: { ...memoryStore.settings.socials, ...(socials || {}) }
    };
    return res.json({ success: true, message: 'Settings saved successfully', settings: memoryStore.settings });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to update system settings', error: err.message });
  }
};
