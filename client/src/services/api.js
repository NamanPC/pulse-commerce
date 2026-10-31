import axios from 'axios';

const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHealth = async () => {
  const response = await apiClient.get('/health');
  return response.data;
};

export const getProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

// Auth API helpers (DEV-101)
export const loginUser = async (credentials) => {
  const response = await apiClient.post('/auth/login', credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await apiClient.post('/auth/register', userData);
  return response.data;
};

// Payment API helpers (DEV-201)
export const processPayment = async (paymentData) => {
  const response = await apiClient.post('/payment/checkout', paymentData);
  return response.data;
};

export default apiClient;
