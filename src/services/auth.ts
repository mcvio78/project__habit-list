import { AxiosResponse } from 'axios';

import { apiClient } from './client';

const endpoint = '/auth';

const login = (email: string, password: string): Promise<AxiosResponse> =>
  apiClient.post(endpoint, { email, password });

export const authAPI = { login };
