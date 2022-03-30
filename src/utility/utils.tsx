import { RefObject } from 'react';
import {
  getUnixTime,
  fromUnixTime,
  getTime,
  addDays,
  formatDistance,
  format,
} from 'date-fns';

import { HabitFinalState, HabitStatus, TargetType } from '../helpers/constants';
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

export const resetFormObjValues = (
  objValues: Record<string, string | boolean | number | Date>,
): Record<string, string | boolean | number | Date | null> => {
  return Object.keys(objValues).reduce(
    (
      accumulator: Record<string, string | number | boolean | null>,
      key: string,
    ) => {
      accumulator = {
        ...accumulator,
        [key]: resetFormFieldValue(objValues[key]),
      };
      return accumulator;
    },
    {},
  );
};

export const dateToTsUTC = (date: Date): number =>
  Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 1000;

export const dateToStartDayUTS = (date: Date): number => {
  date.setHours(0, 0, 0, 0);
  return getUnixTime(date);
};

export const habitCurrentState = (
  habitStatus: HabitStatus,
  selectedDateUTS: number,
): {
  habitFinalState: HabitFinalState;
  isHabitValid: boolean;
  habitRemainingTimeStr: string;
  expirationDate: string;
} => {
  const currentTime = Math.round(getTime(new Date()) / 1000);
  const selectedDateExpirationUTS = getUnixTime(
    addDays(fromUnixTime(selectedDateUTS), 1),
  );
  const isHabitValid = currentTime < selectedDateExpirationUTS;
  const habitRemainingTimeStr = formatDistance(
    fromUnixTime(selectedDateExpirationUTS),
    new Date(),
  );
  const expirationDate = format(
    new Date(selectedDateExpirationUTS * 1000),
    "yyyy MM dd' 'HH:mm:ss",
  );

  if (habitStatus && habitStatus === HabitStatus.Pending && isHabitValid) {
    return {
      habitFinalState: HabitFinalState.Pending,
      isHabitValid,
      habitRemainingTimeStr,
      expirationDate,
    };
  }
  if (habitStatus && habitStatus === HabitStatus.Pending && !isHabitValid) {
    return {
      habitFinalState: HabitFinalState.Failed,
      isHabitValid,
      habitRemainingTimeStr,
      expirationDate,
    };
  }
  if (habitStatus && habitStatus === HabitStatus.Done) {
    return {
      habitFinalState: HabitFinalState.Successful,
      isHabitValid,
      habitRemainingTimeStr,
      expirationDate,
    };
  }
  if (habitStatus && habitStatus === HabitStatus.Undone) {
    return {
      habitFinalState: HabitFinalState.Failed,
      isHabitValid,
      habitRemainingTimeStr,
      expirationDate,
    };
  }
  if (habitStatus && habitStatus === HabitStatus.Postponed) {
    return {
      habitFinalState: HabitFinalState.Postponed,
      isHabitValid,
      habitRemainingTimeStr,
      expirationDate,
    };
  }
  throw new Error('There was a problem getting habit state');
};

export const addHabitsFinalState = (
  DailyHabits: HabitStored[] | [],
): HabitWithFinalState[] =>
  DailyHabits?.map((habit: HabitStored) => {
    const {
      habitFinalState,
      isHabitValid,
      habitRemainingTimeStr,
      expirationDate,
    } = habitCurrentState(
      habit.habitStatus,
      habit.selectedDateObj.selectedDateUTS,
    );
    return {
      ...habit,
      habitFinalState: habitFinalState,
      isHabitValid: isHabitValid,
      habitRemainingTimeStr: habitRemainingTimeStr,
      expirationDate: expirationDate,
    };
  });

export const calculateResults = (
  habitsWithFinalState: HabitWithFinalState[],
): Record<HabitFinalState, number> => {
  const results = { pending: 0, successful: 0, failed: 0, postponed: 0 };
  habitsWithFinalState?.forEach((habit: HabitWithFinalState) => {
    results[habit.habitFinalState]++;
  });
  return results;
};

export const initTargetCurrent = (targetType: TargetType): number | null => {
  if (targetType === TargetType.max) return 100;
  if (targetType === TargetType.min) return 0;
  return null;
};
