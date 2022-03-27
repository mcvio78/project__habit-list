import { RefObject } from 'react';
import { addDays, fromUnixTime, getUnixTime } from 'date-fns';

import { HabitFinalState, HabitStatus } from '../helpers/constants';
import { HabitWithFinalState, HabitStored } from '../helpers/globalTypes';

export const debounce = (
  callback: (event: Event) => void,
  wait: number,
): EventListener => {
  let timeoutId: number;
  return (...args: [any]) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      // eslint-disable-next-line prefer-spread
      callback.apply(null, args);
    }, wait);
  };
};

export const getRefElement = <T,>(
  element?: RefObject<Element> | T,
): Element | T | undefined | null => {
  if (element && 'current' in element) {
    return element.current;
  }
  return element;
};

export const isSSR = !(
  typeof window !== 'undefined' && window.document?.createElement
);

export const resetFormFieldValue = (
  value: string | boolean | number | Date,
): string | boolean | null => {
  if (typeof value === 'string') return '';
  if (typeof value === 'boolean') return false;
  if (typeof value === 'number') return null;
  if (Object.prototype.toString.call(value) === '[object Date]') return null;
  return null;
};

export const dateToTsUTC = (date: Date): number =>
  Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

export const dateToStartDayUTS = (date: Date): number => {
  date.setHours(0, 0, 0, 0);
  return getUnixTime(date);
};

export const habitCurrentState = (
  habitStatus: HabitStatus,
  selectedDateUTS: number,
): { habitFinalState: HabitFinalState; isHabitValid: boolean } => {
  const currentUTS = getUnixTime(new Date());
  const selectedDateExpirationUTS = getUnixTime(
    addDays(fromUnixTime(selectedDateUTS), 1),
  );
  const isHabitValid = currentUTS < selectedDateExpirationUTS;

  if (habitStatus && habitStatus === HabitStatus.Pending && isHabitValid) {
    return { habitFinalState: HabitFinalState.Pending, isHabitValid };
  }
  if (habitStatus && habitStatus === HabitStatus.Pending && !isHabitValid) {
    return { habitFinalState: HabitFinalState.Failed, isHabitValid };
  }
  if (habitStatus && habitStatus === HabitStatus.Done) {
    return { habitFinalState: HabitFinalState.Successful, isHabitValid };
  }
  if (habitStatus && habitStatus === HabitStatus.Undone) {
    return { habitFinalState: HabitFinalState.Failed, isHabitValid };
  }
  if (habitStatus && habitStatus === HabitStatus.Postponed) {
    return { habitFinalState: HabitFinalState.Postponed, isHabitValid };
  }
  throw new Error('There was a problem getting habit state');
};

export const addHabitsFinalState = (
  DailyHabits: HabitStored[] | [],
): HabitWithFinalState[] =>
  DailyHabits?.map((habit: HabitStored) => {
    const { habitFinalState, isHabitValid } = habitCurrentState(
      habit.habitStatus,
      habit.selectedDateObj.selectedDateUTS,
    );
    return {
      ...habit,
      finalState: habitFinalState,
      isValid: isHabitValid,
    };
  });

export const calculateResults = (
  habitsWithFinalState: HabitWithFinalState[],
): Record<HabitFinalState, number> => {
  const results = { pending: 0, successful: 0, failed: 0, postponed: 0 };
  habitsWithFinalState?.forEach((habit: HabitWithFinalState) => {
    results[habit.finalState]++;
  });
  return results;
};
