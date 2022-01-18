import { useMemo } from 'react';

import { useEventListener } from './useEventListener';

export const useKeyEvent = (
  callback: (event: Event) => void,
  keyEvt: keyof WindowEventMap,
): void => {
  const handleKeyEvent = useMemo(
    () => (event: Event) => callback(event),
    [callback],
  );

  useEventListener({
    type: keyEvt,
    listener: handleKeyEvent,
    options: { passive: true },
  });
};
