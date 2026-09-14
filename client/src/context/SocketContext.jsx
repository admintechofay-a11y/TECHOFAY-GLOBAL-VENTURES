import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [latency, setLatency] = useState(14);
  const [telemetry, setTelemetry] = useState({
    activeUsers: 24,
    serverRegion: 'ap-south-1 (Mumbai, India)',
    uptime: '99.999%',
    lastUpdate: new Date().toLocaleTimeString('en-IN')
  });
  const [realtimeAlerts, setRealtimeAlerts] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const socketRef = useRef(null);
  const pingIntervalRef = useRef(null);

  // Enterprise Web Audio API soft notification chime
  const playLeadChime = useCallback(() => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.12); // G5
      osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.25); // C6

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch {
      // Audio context might be restricted by browser until first interaction
    }
  }, []);

  const addAlert = useCallback((alert) => {
    const newAlert = {
      id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      receivedAt: new Date(),
      ...alert
    };
    setRealtimeAlerts((prev) => [newAlert, ...prev.slice(0, 49)]);
    setUnreadCount((c) => c + 1);
    playLeadChime();
  }, [playLeadChime]);

  const markAllRead = useCallback(() => {
    setUnreadCount(0);
  }, []);

  const clearAlerts = useCallback(() => {
    setRealtimeAlerts([]);
    setUnreadCount(0);
  }, []);

  useEffect(() => {
    const socketUrl = import.meta.env.VITE_API_URL || (
      window.location.hostname === 'localhost' 
        ? 'http://localhost:5000' 
        : window.location.origin
    );

    const socket = io(socketUrl, {
      transports: ['websocket', 'polling'],
      reconnectionAttempts: 10,
      reconnectionDelay: 2000
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setIsConnected(true);
      console.log('[SocketContext] Connected to real-time telemetry core');
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('[SocketContext] Disconnected from real-time core');
    });

    socket.on('telemetry_update', (data) => {
      if (data) {
        setTelemetry((prev) => ({
          ...prev,
          ...data,
          lastUpdate: new Date().toLocaleTimeString('en-IN')
        }));
      }
    });

    socket.on('server_pong', (data) => {
      if (data?.clientSentTime) {
        const roundTrip = Math.max(4, Date.now() - data.clientSentTime);
        setLatency(roundTrip);
      }
    });

    // Real-time events from server with bulletproof fallbacks
    socket.on('new_inquiry', (raw) => {
      const data = raw?._doc ? { ...raw._doc, ...raw } : (raw || {});
      const clientName = data.fullName || data.name || 'Enterprise Client';
      const company = data.companyName || data.company || data.email || 'Direct Account';
      const service = data.service || 'General Inquiry';

      addAlert({
        title: 'New Enterprise Inquiry Received',
        description: `${clientName} (${company}) — ${service}`,
        type: 'inquiry',
        data: {
          ...data,
          fullName: clientName,
          companyName: company,
          service
        }
      });
    });

    socket.on('new_demo_request', (raw) => {
      const data = raw?._doc ? { ...raw._doc, ...raw } : (raw || {});
      const clientName = data.fullName || data.name || 'Client';
      const product = data.productName || 'Techofay Enterprise Product';
      const company = data.companyName || data.company || 'Enterprise';

      addAlert({
        title: 'New Product Demo Booked',
        description: `${clientName} requested demo for ${product} (${company})`,
        type: 'demo',
        data: {
          ...data,
          fullName: clientName,
          productName: product,
          companyName: company
        }
      });
    });

    socket.on('new_career_application', (raw) => {
      const data = raw?._doc ? { ...raw._doc, ...raw } : (raw || {});
      const clientName = data.fullName || data.name || 'Applicant';
      const role = data.role || 'Engineering Lead';

      addAlert({
        title: 'New Talent Application',
        description: `${clientName} applied for ${role}`,
        type: 'career',
        data: {
          ...data,
          fullName: clientName,
          role
        }
      });
    });

    // Ping interval for real-time latency measurement
    pingIntervalRef.current = setInterval(() => {
      if (socket.connected) {
        socket.emit('client_ping', { time: Date.now() });
      }
    }, 15000);

    return () => {
      clearInterval(pingIntervalRef.current);
      socket.disconnect();
    };
  }, [addAlert]);

  return (
    <SocketContext.Provider
      value={{
        isConnected,
        latency,
        telemetry,
        realtimeAlerts,
        unreadCount,
        markAllRead,
        clearAlerts,
        playLeadChime,
        emitEvent: (event, payload) => socketRef.current?.emit(event, payload)
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useRealtime = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useRealtime must be used within a SocketProvider');
  }
  return context;
};
