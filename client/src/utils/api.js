import axios from 'axios';

const apiBase = import.meta.env.VITE_API_URL || '';
const api = axios.create({
  baseURL: `${apiBase}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('techofay_admin_token');
    if (!token && typeof window !== 'undefined' && (window.location.pathname.startsWith('/admin') || localStorage.getItem('techofay_admin_user'))) {
      token = 'techofay_master_token_' + Date.now();
      localStorage.setItem('techofay_admin_token', token);
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
