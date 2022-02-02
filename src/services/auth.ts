import { AxiosResponse } from 'axios';

import { apiClient } from './client';

const registerEndpoint = '/register';
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

const loginEndpoint = '/login';
const login = (username: string, password: string): Promise<AxiosResponse> =>
  apiClient.post(loginEndpoint, {
    username,
    password,
  });

const tokenValidityEndpoint = '/tokenValidity';
const checkTokenValidity = async (): Promise<boolean> => {
  const response = await apiClient.post(tokenValidityEndpoint);
  return response.status === 200;
};

export const authAPI = { register, login, checkTokenValidity };
