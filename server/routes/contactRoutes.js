import express from 'express';
import {
  submitContact,
  getInquiries,
  updateInquiryStatus,
  replyToInquiry,
  deleteInquiry,
  exportInquiriesCsv
} from '../controllers/contactController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', contactRateLimiter, upload.single('attachment'), submitContact);
router.get('/', protect, getInquiries);
router.get('/export-csv', protect, exportInquiriesCsv);
router.patch('/:id', protect, updateInquiryStatus);
router.post('/:id/reply', protect, replyToInquiry);
router.delete('/:id', protect, deleteInquiry);

export default router;
