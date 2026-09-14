import express from 'express';
import {
  applyJob,
  getApplications,
  updateApplicationStatus,
  deleteApplication
} from '../controllers/careerController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/apply', upload.single('resume'), applyJob);
router.get('/applications', protect, getApplications);
router.patch('/applications/:id', protect, updateApplicationStatus);
router.delete('/applications/:id', protect, deleteApplication);

export default router;
