import { createContext, Dispatch, SetStateAction } from 'react';

import { themes } from '../config/themes';
import { HabitWithFinalState } from '../helpers/globalTypes';
import { HabitFinalState } from '../helpers/constants';

// User (Auth)
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
interface CreateAuthContext {
  userState: UserState;
}
const initialAuthContext = {} as CreateAuthContext;
export const AuthContext = createContext<CreateAuthContext>(initialAuthContext);

// Theme
export type Theme = typeof themes[number];
export type ThemeState = [Theme, Dispatch<SetStateAction<string>>];
interface CreateThemeContext {
  themeState: ThemeState;
}
const initialThemeContext = {} as CreateThemeContext;
export const ThemeContext =
  createContext<CreateThemeContext>(initialThemeContext);

// Daily habits
export type DailyHabits = [] | HabitWithFinalState[];
export type DailyState = [DailyHabits, Dispatch<SetStateAction<DailyHabits>>];
interface CreateDailyContext {
  dailyState: DailyState;
}
const initialDailyContext = {} as CreateDailyContext;
export const DailyContext =
  createContext<CreateDailyContext>(initialDailyContext);

// Results
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
interface CreateResultsContext {
  resultsState: ResultsState;
}
const initialResultsContext = {} as CreateResultsContext;
export const ResultsContext = createContext<CreateResultsContext>(
  initialResultsContext,
);

// Selected date (unix time)
export type SelectedDate = number | null;
export type SelectedDateState = [
  SelectedDate,
  Dispatch<SetStateAction<SelectedDate>>,
];
interface CreateSelectedDateContext {
  selectedDateState: SelectedDateState;
}
const initialSelectedDateContext = {} as CreateSelectedDateContext;
export const SelectedDateContext = createContext<CreateSelectedDateContext>(
  initialSelectedDateContext,
);

// Context loading state
export type LoadingCX = boolean;
export type LoadingCXState = [LoadingCX, Dispatch<SetStateAction<LoadingCX>>];
interface CreateLoadingCXContext {
  loadingCXState: LoadingCXState;
}
const initialLoadingCXContext = {} as CreateLoadingCXContext;
export const LoadingStateCXContext = createContext<CreateLoadingCXContext>(
  initialLoadingCXContext,
);
