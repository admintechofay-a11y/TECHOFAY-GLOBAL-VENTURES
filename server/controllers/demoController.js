import { DemoRequest } from '../models/DemoRequest.js';
import { isConnected } from '../config/db.js';
import { memoryStore } from '../utils/seedData.js';
import { broadcastDemoRequest } from '../socket.js';

export const submitDemoRequest = async (req, res) => {
  try {
    const { productName, fullName, email, companyName, companySize, phoneNumber, requirements } = req.body;

    if (!productName || !fullName || !email || !companyName) {
      return res.status(400).json({ message: 'Product name, your full name, email, and company name are required.' });
    }

    const demoData = {
      productName,
      fullName,
      email,
      companyName,
      companySize: companySize || '10-50',
      phoneNumber: phoneNumber || '',
      requirements: requirements || '',
      status: 'Pending',
      createdAt: new Date()
    };

    let saved;
    if (isConnected) {
      const demo = new DemoRequest(demoData);
      saved = await demo.save();
    } else {
      saved = { ...demoData, _id: `demo-${Date.now()}` };
      memoryStore.demoRequests.unshift(saved);
    }

    // Broadcast in real-time
    broadcastDemoRequest(saved);

    return res.status(201).json({ success: true, message: 'Demo request scheduled! Our solutions architect will contact you.', demo: saved });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to schedule product demo', error: err.message });
  }
};

export const getDemoRequests = async (req, res) => {
  try {
    if (isConnected) {
      const requests = await DemoRequest.find().sort({ createdAt: -1 });
      return res.json(requests);
    } else {
      return res.json(memoryStore.demoRequests);
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error fetching demo requests', error: err.message });
  }
};

export const updateDemoStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (isConnected) {
      const demo = await DemoRequest.findByIdAndUpdate(id, { status }, { new: true });
      if (!demo) return res.status(404).json({ message: 'Demo request not found' });
      return res.json(demo);
    } else {
      const demo = memoryStore.demoRequests.find(d => String(d._id) === String(id));
      if (!demo) return res.status(404).json({ message: 'Demo request not found' });
      demo.status = status;
      return res.json(demo);
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error updating demo request', error: err.message });
  }
};

export const deleteDemoRequest = async (req, res) => {
  try {
    const { id } = req.params;
    if (isConnected) {
      await DemoRequest.findByIdAndDelete(id);
    } else {
      memoryStore.demoRequests = memoryStore.demoRequests.filter(d => String(d._id) !== String(id));
    }
    return res.json({ success: true, message: 'Demo request removed.' });
  } catch (err) {
    return res.status(500).json({ message: 'Error deleting demo request', error: err.message });
  }
};
