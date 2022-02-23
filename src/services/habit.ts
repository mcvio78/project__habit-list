import { AxiosResponse } from 'axios';

import { apiClient } from './client';

interface NewHabit {
  habitType: string;
  habitName: string;
  targetType: string;
  targetValue: number;
  expirationDate: Date;
}

const createHabitEndpoint = '/api/habit/create';
const createHabit = async (newHabit: NewHabit): Promise<AxiosResponse> => {
  const dateUTC = Date.UTC(
    newHabit.expirationDate.getFullYear(),
    newHabit.expirationDate.getMonth(),
    newHabit.expirationDate.getDate(),
  );
  return apiClient.post(createHabitEndpoint, {
    ...newHabit,
    expirationDate: dateUTC,
  });
};

const getDailyHabitsEndpoint = '/api/habit/daily';
const getDailyHabits = (date: string): Promise<AxiosResponse> =>
  apiClient.get(getDailyHabitsEndpoint, {
    params: {
      day: date,
    },
  });

export const habitAPI = { createHabit, getDailyHabits };
