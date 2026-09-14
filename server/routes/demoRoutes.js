import express from 'express';
import {
  submitDemoRequest,
  getDemoRequests,
  updateDemoStatus,
  deleteDemoRequest
} from '../controllers/demoController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', submitDemoRequest);
router.get('/', protect, getDemoRequests);
router.patch('/:id', protect, updateDemoStatus);
router.delete('/:id', protect, deleteDemoRequest);

export default router;
