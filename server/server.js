import http from 'http';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import { seedDatabase } from './utils/seedData.js';
import { initSocket } from './socket.js';
import { generalLimiter } from './middleware/rateLimiter.js';

import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import demoRoutes from './routes/demoRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();

const app = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 5000;

export const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.FRONTEND_URL,
  'https://techofay.com',
  'https://www.techofay.com',
].filter(Boolean);

const io = initSocket(httpServer, ALLOWED_ORIGINS);

// Security Headers
app.use(
  helmet({
    crossOriginEmbedderPolicy: false, // needed for Three.js CDN assets
    contentSecurityPolicy: false,
  })
);

// Restricted CORS
app.use(
  cors({
    origin: (origin, cb) => {
      // Allow requests with no origin (Postman, server-to-server, mobile apps)
      if (!origin || ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
      cb(new Error(`CORS: Origin ${origin} not permitted`));
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

// Apply General Rate Limiter to all API routes
app.use('/api/', generalLimiter);

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
    timestamp: new Date(),
  });
});

// 404 Handler for API
app.use('/api/*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Error handling middleware — sanitized for production
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const isDev = process.env.NODE_ENV !== 'production';
  console.error(`[${new Date().toISOString()}] ${req.method} ${req.path} — ${err.message}`);
  res.status(status).json({
    success: false,
    message: isDev ? err.message : status < 500 ? err.message : 'Internal Enterprise Server Error',
    ...(isDev && { stack: err.stack }),
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
    console.log(`🛡️  Security Headers: Helmet active, CORS restricted`);
    console.log(`🔑 Default Admin: ${process.env.ADMIN_EMAIL || 'admin@techofay.com'}`);
    console.log(`=======================================================`);
  });
};

startServer();
