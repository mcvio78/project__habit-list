import { AxiosResponse } from 'axios';

import { apiClient } from './client';
import { HabitCreate, HabitStoredOptional } from '../helpers/globalTypes';

const createHabitEndpoint = '/api/habit/create';
const createHabit = async (newHabit: HabitCreate): Promise<AxiosResponse> =>
  apiClient.post(createHabitEndpoint, newHabit);

const getDailyHabitsEndpoint = '/api/habit/daily';
const getDailyHabits = (unixDateStart: number): Promise<AxiosResponse> =>
  apiClient.get(getDailyHabitsEndpoint, {
    params: { dateUTC: unixDateStart },
  });

const modifyDailyHabitEndpoint = '/api/habit/modify';
const modifyDailyHabit = (
  habitModifies: HabitStoredOptional,
): Promise<AxiosResponse> =>
  apiClient.patch(modifyDailyHabitEndpoint, habitModifies);

const deleteDailyHabitEndpoint = '/api/habit/delete';
const deleteDailyHabit = (habitId: number): Promise<AxiosResponse> =>
  apiClient.delete(deleteDailyHabitEndpoint, {
    params: { id: habitId },
  });

export const habitAPI = {
  createHabit,
  getDailyHabits,
  modifyDailyHabit,
  deleteDailyHabit,
};
