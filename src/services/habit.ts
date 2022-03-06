import { AxiosResponse } from 'axios';

import { apiClient } from './client';
import { HabitCreate, HabitStoredOptional } from '../helpers/globalTypes';
import { TargetType } from '../helpers/constants';

const createHabitEndpoint = '/api/habit/create';
const createHabit = async (newHabit: HabitCreate): Promise<AxiosResponse> => {
  const initTargetCurrent = () => {
    if (newHabit.targetType === TargetType.max) return 100;
    if (newHabit.targetType === TargetType.min) return 0;
    return null;
  };
  return apiClient.post(createHabitEndpoint, {
    ...newHabit,
    targetCurrent: initTargetCurrent(),
  });
};

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
