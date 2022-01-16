import { RefObject } from 'react';

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

export const getRefElement = <T>(
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
