import express from 'express';
import {
  getDashboardMetrics,
  getSettings,
  updateSettings
} from '../controllers/settingsController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/metrics', protect, getDashboardMetrics);
router.get('/', getSettings);
router.put('/', protect, updateSettings);

export default router;
