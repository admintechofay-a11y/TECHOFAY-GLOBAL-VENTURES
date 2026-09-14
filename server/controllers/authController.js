import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { isConnected } from '../config/db.js';
import { memoryStore } from '../utils/seedData.js';
import bcrypt from 'bcryptjs';

const generateToken = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    process.env.JWT_SECRET || 'techofay_super_secret_jwt_key_2025_enterprisegrade',
    { expiresIn: '30d' }
  );
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const adminEmail = (process.env.ADMIN_EMAIL || 'admin@techofay.com').trim().toLowerCase();
    const adminPassword = process.env.ADMIN_PASSWORD || 'Techofay@2025!';

    const isMasterAdminMatch = cleanEmail === adminEmail && password === adminPassword;

    if (isConnected) {
      let user = await User.findOne({ email: cleanEmail });

      if (user && (await user.matchPassword(password))) {
        return res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: generateToken(user._id, user.email, user.role)
        });
      }

      // If master admin credentials match but password in DB was desynced or user was missing
      if (isMasterAdminMatch) {
        if (!user) {
          user = new User({
            name: 'Super Admin',
            email: adminEmail,
            password: adminPassword,
            role: 'admin'
          });
        } else {
          user.password = adminPassword;
        }
        await user.save();

        return res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: generateToken(user._id, user.email, user.role)
        });
      }
    } else {
      // Memory store fallback
      let user = memoryStore.users.find(u => u.email.toLowerCase() === cleanEmail);
      if (isMasterAdminMatch || (user && user.password === password)) {
        if (!user) {
          user = {
            _id: 'mem-admin-1',
            name: 'Super Admin',
            email: adminEmail,
            password: adminPassword,
            role: 'admin'
          };
          memoryStore.users.push(user);
        }
        return res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: generateToken(user._id, user.email, user.role)
        });
      }
    }

    return res.status(401).json({ message: 'Invalid enterprise credentials' });
  } catch (err) {
    console.error('[Auth Login Error]:', err);
    return res.status(500).json({ message: 'Authentication server error', error: err.message });
  }
};

export const getMe = async (req, res) => {
  try {
    return res.json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!newPassword || newPassword.length < 8) {
      return res.status(400).json({ message: 'New password must be at least 8 characters long' });
    }

    if (isConnected) {
      const user = await User.findById(req.user._id);
      if (!user || !(await user.matchPassword(currentPassword))) {
        return res.status(400).json({ message: 'Current password is not correct' });
      }
      user.password = newPassword;
      await user.save();
    } else {
      const user = memoryStore.users.find(u => u._id === req.user._id);
      if (user) {
        user.password = newPassword;
      }
    }

    return res.json({ message: 'Password updated successfully' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
