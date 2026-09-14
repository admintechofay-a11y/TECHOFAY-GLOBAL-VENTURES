import { Application } from '../models/Application.js';
import { isConnected } from '../config/db.js';
import { memoryStore } from '../utils/seedData.js';
import { broadcastCareerApplication } from '../socket.js';

export const applyJob = async (req, res) => {
  try {
    const { fullName, email, phone, role, linkedin, portfolio, coverLetter } = req.body;

    if (!fullName || !email || !role) {
      return res.status(400).json({ message: 'Full name, email, and role are required.' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'A resume file (PDF/DOC) is required.' });
    }

    const resumeUrl = `/uploads/${req.file.filename}`;

    const appData = {
      fullName,
      email,
      phone: phone || '',
      role,
      linkedin: linkedin || '',
      portfolio: portfolio || '',
      resumeUrl,
      coverLetter: coverLetter || '',
      status: 'New',
      createdAt: new Date()
    };

    let saved;
    if (isConnected) {
      const application = new Application(appData);
      saved = await application.save();
    } else {
      saved = { ...appData, _id: `app-${Date.now()}` };
      memoryStore.applications.unshift(saved);
    }

    // Broadcast in real-time to admin
    broadcastCareerApplication(saved);

    return res.status(201).json({ success: true, message: 'Application submitted successfully!', application: saved });
  } catch (err) {
    console.error('[Career Apply Error]:', err);
    return res.status(500).json({ message: 'Error submitting application', error: err.message });
  }
};

export const getApplications = async (req, res) => {
  try {
    const { status, role } = req.query;

    if (isConnected) {
      let query = {};
      if (status && status !== 'All') query.status = status;
      if (role && role !== 'All') query.role = role;
      const apps = await Application.find(query).sort({ createdAt: -1 });
      return res.json(apps);
    } else {
      let results = [...memoryStore.applications];
      if (status && status !== 'All') results = results.filter(a => a.status === status);
      if (role && role !== 'All') results = results.filter(a => a.role === role);
      return res.json(results);
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error retrieving applications', error: err.message });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminNotes } = req.body;

    if (isConnected) {
      const app = await Application.findById(id);
      if (!app) return res.status(404).json({ message: 'Application not found' });
      if (status) app.status = status;
      if (adminNotes !== undefined) app.adminNotes = adminNotes;
      await app.save();
      return res.json(app);
    } else {
      const app = memoryStore.applications.find(a => String(a._id) === String(id));
      if (!app) return res.status(404).json({ message: 'Application not found' });
      if (status) app.status = status;
      if (adminNotes !== undefined) app.adminNotes = adminNotes;
      return res.json(app);
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error updating application', error: err.message });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    if (isConnected) {
      await Application.findByIdAndDelete(id);
    } else {
      memoryStore.applications = memoryStore.applications.filter(a => String(a._id) !== String(id));
    }
    return res.json({ success: true, message: 'Application record deleted.' });
  } catch (err) {
    return res.status(500).json({ message: 'Error deleting application', error: err.message });
  }
};
