import axios, { AxiosInstance } from 'axios';
import { authStorage } from '../utility/auth/storage';

export const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 3000,
});

apiClient.interceptors.request.use(
  async config => {
    const token = await authStorage.getToken();
    if (token) {
      config.headers = { 'x-access-token': token };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
