import { AxiosResponse } from 'axios';

import { apiClient } from './client';
import { HabitCreate, HabitStoredOptional } from '../helpers/globalTypes';

const createHabitEndpoint = '/api/habit/create';
const createHabit = async (newHabit: HabitCreate): Promise<AxiosResponse> =>
  apiClient.post(createHabitEndpoint, newHabit);

const getDailyHabitsEndpoint = '/api/habit/daily';
const getDailyHabits = (date: string): Promise<AxiosResponse> =>
  apiClient.get(getDailyHabitsEndpoint, {
    params: {
      day: date,
    },
  });

const modifyDailyHabitEndpoint = '/api/habit/modify';
const modifyDailyHabit = (
  habitModifies: HabitStoredOptional,
): Promise<AxiosResponse> =>
  apiClient.patch(modifyDailyHabitEndpoint, habitModifies);

export const habitAPI = { createHabit, getDailyHabits, modifyDailyHabit };
