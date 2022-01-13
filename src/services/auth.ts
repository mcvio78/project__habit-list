import { AxiosResponse } from 'axios';

import { apiClient } from './client';

const registerEndpoint = '/register';
const register = (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
): Promise<AxiosResponse> =>
  apiClient.post(registerEndpoint, {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });

const loginEndpoint = '/login';
const login = (email: string, password: string): Promise<AxiosResponse> =>
  apiClient.post(loginEndpoint, {
    email,
    password,
  });

const tokenValidityEndpoint = '/tokenValidity';
const checkTokenValidity = async (): Promise<boolean> => {
  const response = await apiClient.post(tokenValidityEndpoint);
  return response.status === 200;
};

export const authAPI = { register, login, checkTokenValidity };
