import express from 'express';
import {
  getBlogPosts,
  getBlogPostBySlug,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
} from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getBlogPosts);
router.get('/:slug', getBlogPostBySlug);
router.post('/', protect, createBlogPost);
router.patch('/:id', protect, updateBlogPost);
router.delete('/:id', protect, deleteBlogPost);

export default router;
