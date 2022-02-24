import { RefObject } from 'react';
import { add, getUnixTime } from 'date-fns';

import { FinalState, HabitStatus, HabitType } from '../helpers/constants';

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

interface CheckHabitStateProps {
  habitType: HabitType;
  habitStatus: HabitStatus;
  expirationDate: number;
}

export const checkHabitState = ({
  habitType,
  habitStatus,
  expirationDate,
}: CheckHabitStateProps): { finalState: FinalState; isHabitValid: boolean } => {
  if (expirationDate) {
    const expirationDateTime = add(new Date(expirationDate), { days: 1 });
    const expirationUnixTime = getUnixTime(expirationDateTime);
    const currentTime = getUnixTime(new Date());
    const isHabitValid = currentTime < expirationUnixTime;

    if (isHabitValid) {
      if (habitType === HabitType.ToDo) {
        if (habitStatus === HabitStatus.Unchecked) {
          return { finalState: FinalState.Pending, isHabitValid };
        }
        if (habitStatus === HabitStatus.Done) {
          return { finalState: FinalState.Successful, isHabitValid };
        }
        if (habitStatus === HabitStatus.Undone) {
          return { finalState: FinalState.Failed, isHabitValid };
        }
        if (habitStatus === HabitStatus.Postponed) {
          return { finalState: FinalState.Pending, isHabitValid };
        }
      } else if (habitType === HabitType.Avoid) {
        if (habitStatus === HabitStatus.Unchecked) {
          return { finalState: FinalState.Pending, isHabitValid };
        }
        if (habitStatus === HabitStatus.Done) {
          return { finalState: FinalState.Failed, isHabitValid };
        }
        if (habitStatus === HabitStatus.Undone) {
          return { finalState: FinalState.Successful, isHabitValid };
        }
        if (habitStatus === HabitStatus.Postponed) {
          return { finalState: FinalState.Failed, isHabitValid };
        }
      }
    } else if (currentTime >= expirationUnixTime) {
      if (habitType === HabitType.ToDo) {
        if (habitStatus === HabitStatus.Unchecked) {
          return { finalState: FinalState.Failed, isHabitValid };
        }
        if (habitStatus === HabitStatus.Done) {
          return { finalState: FinalState.Successful, isHabitValid };
        }
        if (habitStatus === HabitStatus.Undone) {
          return { finalState: FinalState.Failed, isHabitValid };
        }
        if (habitStatus === HabitStatus.Postponed) {
          return { finalState: FinalState.Postponed, isHabitValid };
        }
      } else if (habitType === HabitType.Avoid) {
        if (habitStatus === HabitStatus.Unchecked) {
          return { finalState: FinalState.Successful, isHabitValid };
        }
        if (habitStatus === HabitStatus.Done) {
          return { finalState: FinalState.Failed, isHabitValid };
        }
        if (habitStatus === HabitStatus.Undone) {
          return { finalState: FinalState.Successful, isHabitValid };
        }
        if (habitStatus === HabitStatus.Postponed) {
          return { finalState: FinalState.Failed, isHabitValid };
        }
      }
    }
  }
  return { finalState: FinalState.Error, isHabitValid: false };
};
