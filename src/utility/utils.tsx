import { RefObject } from 'react';
import { add, getUnixTime } from 'date-fns';

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

export const dateToUTC = (date: Date): number =>
  Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

export const habitCurrentState = (
  habitStatus: HabitStatus,
  expirationDate: number,
): { habitFinalState: HabitFinalState; isHabitValid: boolean } => {
  const expirationDateTime = add(new Date(expirationDate), { days: 1 });
  const expirationUnixTime = getUnixTime(expirationDateTime);
  const currentUnixTime = getUnixTime(new Date());
  const isHabitValid = currentUnixTime < expirationUnixTime;

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
  return { habitFinalState: HabitFinalState.Failed, isHabitValid: false };
};

export const addHabitFinalState = (
  DailyHabits: HabitStored[] | [],
): HabitWithFinalState[] =>
  DailyHabits?.map((habit: HabitStored) => {
    const { habitFinalState, isHabitValid } = habitCurrentState(
      habit.habitStatus,
      habit.expirationDate,
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
