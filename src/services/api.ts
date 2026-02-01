import axios from 'axios';
import { TrainingProgram, Product } from '../types';

// Vite uses import.meta.env
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Keep all your service functions (they remain the same)
export const programService = {
  getAllPrograms: async (): Promise<TrainingProgram[]> => {
    // In Vite, public files are served from root
    const response = await axios.get('/data/programs.json');
    return response.data.programs;
  },
  // ... rest of the functions
};

export const productService = {
  getAllProducts: async (): Promise<Product[]> => {
    const response = await axios.get('/data/accessories.json');
    return response.data.products;
  },
  // ... rest of the functions
};

export default api;