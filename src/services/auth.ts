import { AxiosResponse } from 'axios';

import { apiClient } from './client';

const registerEndpoint = '/api/auth/signup';
const register = (
  username: string,
  email: string,
  password: string,
): Promise<AxiosResponse> =>
  apiClient.post(registerEndpoint, {
    username,
    email,
    password,
  });

const loginEndpoint = '/api/auth/signin';
const login = (username: string, password: string): Promise<AxiosResponse> =>
  apiClient.post(loginEndpoint, {
    username,
    password,
  });

const tokenValidityEndpoint = '/api/token';
const checkTokenValidity = async (): Promise<boolean> => {
  const response = await apiClient.get(tokenValidityEndpoint);
  return response.status === 200;
};

export const authAPI = { register, login, checkTokenValidity };
