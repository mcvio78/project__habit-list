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
const createHabit = (newHabit: NewHabit): Promise<AxiosResponse> => {
  newHabit.expirationDate = new Date(
    newHabit.expirationDate.getTime() -
      newHabit.expirationDate.getTimezoneOffset() * 60000,
  );
  return apiClient.post(createHabitEndpoint, newHabit);
};

const getDailyHabitsEndpoint = '/api/habit/daily';
const getDailyHabits = (date: string): Promise<AxiosResponse> =>
  apiClient.get(getDailyHabitsEndpoint, {
    params: {
      day: date,
    },
  });

export const habitAPI = { createHabit, getDailyHabits };
