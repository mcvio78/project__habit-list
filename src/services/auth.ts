import { AxiosResponse } from 'axios';

import { apiClient } from './client';

interface RegisterUserCredentials {
  username: string;
  email: string;
  password: string;
}

interface LoginUserCredentials {
  username: string;
  password: string;
}

const registerEndpoint = '/api/auth/signup';
const register = (
  registerUserCredentials: RegisterUserCredentials,
): Promise<AxiosResponse> =>
  apiClient.post(registerEndpoint, registerUserCredentials);

const loginEndpoint = '/api/auth/signin';
const login = (
  loginUserCredentials: LoginUserCredentials,
): Promise<AxiosResponse> =>
  apiClient.post(loginEndpoint, loginUserCredentials);

const tokenValidityEndpoint = '/api/token-validate';
const checkTokenValidity = async (): Promise<boolean> => {
  const response = await apiClient.get(tokenValidityEndpoint);
  return response.status === 200;
};

export const authAPI = { register, login, checkTokenValidity };
