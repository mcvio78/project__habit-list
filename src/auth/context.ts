import { createContext, Dispatch, SetStateAction } from 'react';

import { themes } from '../config/themes';
import { HabitWithFinalState } from '../helpers/globalTypes';
import { HabitFinalState } from '../helpers/constants';

export interface User {
  aud: string;
  email: string;
  exp: number;
  iat: number;
  iss: string;
  username: string;
  nbf: number;
  permissions: string[];
  sub: string;
  id: string;
}
export type UserState = [User | null, Dispatch<SetStateAction<null>>];

export type Theme = typeof themes[number];
type ThemeState = [Theme, Dispatch<SetStateAction<string>>];

export type DailyHabit = [] | HabitWithFinalState[];
export type DailyState = [DailyHabit, Dispatch<SetStateAction<DailyHabit>>];

export interface Result {
  [HabitFinalState.Pending]: number;
  [HabitFinalState.Successful]: number;
  [HabitFinalState.Failed]: number;
  [HabitFinalState.Postponed]: number;
}
export interface Results {
  dailyResult: Result;
  weeklyResult: Result;
  monthlyResult: Result;
}
export type ResultsState = [Results, Dispatch<SetStateAction<Results>>];

interface CreateContext {
  userState: UserState;
  themeState: ThemeState;
  dailyState: DailyState;
  resultsState: ResultsState;
}

const initialContext = {} as CreateContext;

export const AuthContext = createContext<CreateContext>(initialContext);
