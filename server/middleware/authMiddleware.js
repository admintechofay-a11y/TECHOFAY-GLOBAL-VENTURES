import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { isConnected } from '../config/db.js';
import { memoryStore } from '../utils/seedData.js';

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  if (!process.env.JWT_SECRET) {
    console.error('[FATAL] JWT_SECRET is not set in environment variables');
    return res.status(500).json({ message: 'Server configuration error.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Try DB first, fall back to memory store
    let user = null;
    if (isConnected) {
      user = await User.findById(decoded.id).select('-password');
    }
    if (!user) {
      user = memoryStore.users.find((u) => u._id?.toString() === decoded.id);
    }
    if (!user) {
      return res.status(401).json({ message: 'User not found. Please log in again.' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('[Auth Middleware] Token error:', err.message);
    return res.status(401).json({ message: 'Token invalid or expired. Please log in again.' });
  }
};
