import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, trim: true, default: '' },
  companyName: { type: String, trim: true, default: '' },
  service: { 
    type: String, 
    required: true,
    trim: true,
    default: 'General Inquiry'
  },
  budget: { 
    type: String, 
    trim: true,
    default: '₹1,00,000 - ₹5,00,000'
  },
  timeline: { 
    type: String, 
    trim: true,
    default: '1 - 3 Months'
  },
  message: { type: String, required: true },
  referralSource: { type: String, default: 'Google Search' },
  attachment: { type: String, default: null },
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Resolved', 'Spam'],
    default: 'New'
  },
  adminNotes: { type: String, default: '' },
  replies: [{
    sentAt: { type: Date, default: Date.now },
    sender: { type: String, default: 'Admin' },
    message: { type: String }
  }],
  createdAt: { type: Date, default: Date.now }
});

export const Inquiry = mongoose.model('Inquiry', inquirySchema);
