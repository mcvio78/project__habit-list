import { AxiosResponse } from 'axios';

import { apiClient } from './client';

interface NewHabit {
  habitType: string;
  habitName: string;
  targetType: string;
  targetAmount: number;
  expirationDate: Date;
}

const createHabitEndpoint = '/api/habit/create';
const createHabit = (newHabit: NewHabit): Promise<AxiosResponse> =>
  apiClient.post(createHabitEndpoint, newHabit);

export const habitAPI = { createHabit };
