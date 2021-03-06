import { useMemo } from 'react';

import { useEventListener } from './useEventListener';
import { debounce } from '../utility/utils';

export const useResize = (
  callback: (event: Event) => void,
  wait = 250,
): void => {
  const handleResize = useMemo(
    () =>
      wait !== 0
        ? debounce((event: Event) => callback(event), wait)
        : (event: Event) => callback(event),
    [wait, callback],
  );

  useEventListener({
    type: 'resize',
    listener: handleResize,
    options: { passive: true },
  });
};
