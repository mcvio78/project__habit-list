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
  apiClient.post(
    loginEndpoint,
    {
      email,
      password,
    },
    {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Headers': 'x-access-token',
        'x-access-token': 'TOKEN_HERE',
      },
    },
  );

export const authAPI = { register, login };
