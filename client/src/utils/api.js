import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || ''}/api`,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000, // 15s timeout — prevents infinite hangs
});

// Attach token from storage (only if it exists — never auto-create)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('techofay_admin_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    if (typeof FormData !== 'undefined' && config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auto-logout on 401 — token expired or invalid
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('techofay_admin_token');
      localStorage.removeItem('techofay_admin_user');
      // Only redirect if currently in admin section
      if (
        typeof window !== 'undefined' &&
        window.location.pathname.startsWith('/admin') &&
        !window.location.pathname.includes('/login')
      ) {
        window.location.href = '/admin/login';
      }
    }
    return Promise.reject(err);
  }
);

export default api;
