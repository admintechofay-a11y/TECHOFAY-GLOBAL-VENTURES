import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, trim: true, default: '' },
  role: { type: String, required: true },
  linkedin: { type: String, trim: true, default: '' },
  portfolio: { type: String, trim: true, default: '' },
  resumeUrl: { type: String, required: true },
  coverLetter: { type: String, default: '' },
  status: {
    type: String,
    enum: ['New', 'Shortlisted', 'Interviewing', 'Rejected', 'Hired'],
    default: 'New'
  },
  adminNotes: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

export const Application = mongoose.model('Application', applicationSchema);
