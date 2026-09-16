import { Server } from 'socket.io';

let io = null;
let activeConnections = 0;
const serverStartTime = Date.now();

/**
 * Initialize WebSockets on HTTP server
 */
export const initSocket = (httpServer, allowedOriginChecker) => {
  io = new Server(httpServer, {
    cors: {
      origin: (origin, callback) => {
        if (typeof allowedOriginChecker === 'function') {
          return callback(null, allowedOriginChecker(origin));
        }
        if (Array.isArray(allowedOriginChecker)) {
          return callback(null, !origin || allowedOriginChecker.includes(origin));
        }
        callback(null, true);
      },
      methods: ['GET', 'POST', 'PATCH', 'DELETE'],
      credentials: true,
    },
    transports: ['websocket', 'polling'],
  });

  io.on('connection', (socket) => {
    activeConnections++;
    console.log(`[Socket.io] Client connected: ${socket.id} (Total Active: ${activeConnections})`);

    // Broadcast accurate telemetry to connected client
    const uptimeSeconds = Math.floor((Date.now() - serverStartTime) / 1000);
    socket.emit('telemetry_update', {
      activeAdminSessions: activeConnections,
      serverUptime: `${uptimeSeconds}s`,
      serverRegion: process.env.SERVER_REGION || 'ap-south-1 (Mumbai, India)',
      timestamp: new Date().toISOString(),
      nodeVersion: process.version,
    });

    // Heartbeat ping/pong for real-time latency measurement
    socket.on('client_ping', (data) => {
      socket.emit('server_pong', {
        clientSentTime: data?.time || Date.now(),
        serverTime: Date.now(),
      });
    });

    socket.on('disconnect', () => {
      activeConnections = Math.max(0, activeConnections - 1);
      console.log(`[Socket.io] Client disconnected: ${socket.id} (Total Active: ${activeConnections})`);
    });
  });

  return io;
};

/**
 * Get the initialized Socket.io instance
 */
export const getIO = () => {
  if (!io) {
    console.warn('[Socket.io] Socket instance requested before initialization');
  }
  return io;
};

/**
 * Real-time event broadcasters
 */
export const broadcastInquiry = (inquiry) => {
  if (io) {
    const raw = inquiry?.toObject ? inquiry.toObject() : inquiry;
    const payload = {
      _id: raw._id ? String(raw._id) : `inq-${Date.now()}`,
      fullName: raw.fullName || raw.name || 'Anonymous Client',
      email: raw.email || '',
      phone: raw.phone || '',
      companyName: raw.companyName || raw.company || '',
      service: raw.service || 'General Inquiry',
      budget: raw.budget || 'Custom / Flexible',
      timeline: raw.timeline || '1 - 3 Months',
      message: raw.message || '',
      referralSource: raw.referralSource || 'Direct Search',
      status: raw.status || 'New',
      createdAt: raw.createdAt || new Date().toISOString(),
      timestamp: new Date().toISOString(),
      alertType: 'inquiry',
    };
    io.emit('new_inquiry', payload);
    console.log(`[Socket.io Broadcast] New inquiry from ${payload.fullName} (${payload.service}) emitted to all admin sessions`);
  }
};

export const broadcastDemoRequest = (demoRequest) => {
  if (io) {
    const raw = demoRequest?.toObject ? demoRequest.toObject() : demoRequest;
    const payload = {
      _id: raw._id ? String(raw._id) : `demo-${Date.now()}`,
      fullName: raw.fullName || raw.name || 'Client',
      email: raw.email || '',
      productName: raw.productName || 'Techofay Product',
      companyName: raw.companyName || raw.company || '',
      companySize: raw.companySize || 'N/A',
      phoneNumber: raw.phoneNumber || raw.phone || '',
      requirements: raw.requirements || '',
      status: raw.status || 'Pending',
      createdAt: raw.createdAt || new Date().toISOString(),
      timestamp: new Date().toISOString(),
      alertType: 'demo',
    };
    io.emit('new_demo_request', payload);
    console.log(`[Socket.io Broadcast] New demo request for ${payload.productName} from ${payload.fullName} emitted`);
  }
};

export const broadcastCareerApplication = (application) => {
  if (io) {
    const raw = application?.toObject ? application.toObject() : application;
    const payload = {
      _id: raw._id ? String(raw._id) : `app-${Date.now()}`,
      fullName: raw.fullName || raw.name || 'Applicant',
      email: raw.email || '',
      role: raw.role || 'Enterprise Engineer',
      department: raw.department || 'Engineering',
      phone: raw.phone || '',
      status: raw.status || 'Applied',
      createdAt: raw.createdAt || new Date().toISOString(),
      timestamp: new Date().toISOString(),
      alertType: 'career',
    };
    io.emit('new_career_application', payload);
    console.log(`[Socket.io Broadcast] New career application for ${payload.role} from ${payload.fullName} emitted`);
  }
};
