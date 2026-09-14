import http from 'http';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import { seedDatabase } from './utils/seedData.js';
import { initSocket } from './socket.js';

import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import demoRoutes from './routes/demoRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = http.createServer(app);
const io = initSocket(httpServer);
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Mount API Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/demo-request', demoRoutes);
app.use('/api/settings', settingsRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'TECHOFAY GLOBAL VENTURES API',
    version: '1.0.0',
    timestamp: new Date()
  });
});

// 404 Handler for API
app.use('/api/*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[Server Unhandled Error]:', err.stack || err.message);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Enterprise Server Error',
  });
});

// Connect to Database & Start Server
const startServer = async () => {
  await connectDB();
  await seedDatabase();

  httpServer.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`🚀 TECHOFAY GLOBAL VENTURES API & WebSockets running on port ${PORT}`);
    console.log(`🌐 Base URL: http://localhost:${PORT}/api`);
    console.log(`⚡ Real-Time WebSockets: Active (Socket.io ready)`);
    console.log(`🔑 Default Admin: admin@techofay.com`);
    console.log(`=======================================================`);
  });
};

startServer();
