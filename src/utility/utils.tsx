import { RefObject } from 'react';
import { add, getUnixTime } from 'date-fns';

import { FinalState, HabitState, HabitType } from '../helpers/constants';

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

interface CheckHabitStatusProps {
  habitType: HabitType;
  habitState: HabitState;
  expirationDate: number;
}

export const checkHabitStatus = ({
  habitType,
  habitState,
  expirationDate,
}: CheckHabitStatusProps): FinalState | undefined => {
  if (expirationDate) {
    const expirationDateTime = add(new Date(expirationDate), { days: 1 });
    const expirationUnixTime = getUnixTime(expirationDateTime);
    const currentTime = getUnixTime(new Date());

    if (currentTime < expirationUnixTime) {
      if (habitType === HabitType.ToDo) {
        if (habitState === HabitState.Unchecked) {
          return FinalState.Pending;
        }
        if (habitState === HabitState.Done) {
          return FinalState.SuccessfulActive;
        }
        if (habitState === HabitState.Undone) {
          return FinalState.FailedActive;
        }
        if (habitState === HabitState.Postponed) {
          return FinalState.PostponedActive;
        }
      } else if (habitType === HabitType.Avoid) {
        if (habitState === HabitState.Unchecked) {
          return FinalState.Pending;
        }
        if (habitState === HabitState.Done) {
          return FinalState.FailedActive;
        }
        if (habitState === HabitState.Undone) {
          return FinalState.SuccessfulActive;
        }
        if (habitState === HabitState.Postponed) {
          return FinalState.FailedActive;
        }
      }
    } else if (currentTime >= expirationUnixTime) {
      if (habitType === HabitType.ToDo) {
        if (habitState === HabitState.Unchecked) {
          return FinalState.FailedExpired;
        }
        if (habitState === HabitState.Done) {
          return FinalState.SuccessfulExpired;
        }
        if (habitState === HabitState.Undone) {
          return FinalState.FailedExpired;
        }
        if (habitState === HabitState.Postponed) {
          return FinalState.PostponedExpired;
        }
      } else if (habitType === HabitType.Avoid) {
        if (habitState === HabitState.Unchecked) {
          return FinalState.SuccessfulExpired;
        }
        if (habitState === HabitState.Done) {
          return FinalState.FailedExpired;
        }
        if (habitState === HabitState.Undone) {
          return FinalState.SuccessfulExpired;
        }
        if (habitState === HabitState.Postponed) {
          return FinalState.FailedExpired;
        }
      }
    }
  }
};
