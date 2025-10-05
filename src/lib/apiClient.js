// Centralized Axios instance with fallback base URL and helpers
import axios from 'axios';

// Attempt to read from Vite env, fallback to Render backend URL
const baseURL = import.meta?.env?.VITE_BACKEND_URL || 'https://tibu-backend.onrender.com';

console.log('🔗 API Base URL:', baseURL);

const api = axios.create({
  baseURL,
  timeout: 30000, // Increased timeout for Render cold starts
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log('[API Request]', config.method?.toUpperCase(), config.baseURL + config.url);
    return config;
  },
  (err) => Promise.reject(err)
);

// Response interceptor for unified error handling
api.interceptors.response.use(
  (res) => {
    console.log('[API Success]', res.config.method?.toUpperCase(), res.config.url, '->', res.status);
    return res;
  },
  (err) => {
    if (err.response) {
      console.error('[API Error]', err.config?.method?.toUpperCase(), err.config?.url, '->', err.response.status, err.response.data);
    } else if (err.request) {
      console.error('[API Network Error]', err.config?.method?.toUpperCase(), err.config?.url, '-> No response received');
      console.error('[API Network Details]', err.message, 'Base URL:', err.config?.baseURL);
    } else {
      console.error('[API Setup Error]', err.message);
    }
    return Promise.reject(err);
  }
);

export { api, baseURL };
