import { AxiosResponse } from 'axios';

import { apiClient } from './client';

const registerEndpoint = '/register';
const register = (email: string, password: string): Promise<AxiosResponse> =>
  apiClient.post(registerEndpoint, { email, password });

const loginEndpoint = '/login';
const login = (email: string, password: string): Promise<AxiosResponse> =>
  apiClient.post(loginEndpoint, { email, password });

export const authAPI = { register, login };
