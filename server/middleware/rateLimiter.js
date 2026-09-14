import rateLimit from 'express-rate-limit';

export const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: process.env.NODE_ENV === 'production' ? 100 : 1000, // Generous in development
  message: {
    message: 'Too many inquiries submitted from this IP. Please wait an hour before submitting again or call our direct office.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});
