// lib/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // uses the base URL from .env
  
});

export default axiosInstance;
