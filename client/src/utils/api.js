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
    const token = localStorage.getItem('techofay_admin_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
