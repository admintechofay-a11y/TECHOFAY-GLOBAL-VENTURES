import mongoose from 'mongoose';

const demoRequestSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String, required: true },
  companySize: { type: String, default: '10-50' },
  phoneNumber: { type: String, default: '' },
  requirements: { type: String, default: '' },
  status: {
    type: String,
    enum: ['Pending', 'Scheduled', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  createdAt: { type: Date, default: Date.now }
});

export const DemoRequest = mongoose.model('DemoRequest', demoRequestSchema);
