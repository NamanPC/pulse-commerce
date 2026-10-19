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

export default apiClient;
