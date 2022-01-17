import { useCallback, useEffect, useState } from 'react';

import { useWindowSize } from './useWindowSize';
import { isSSR } from '../utility/utils';

export const useBreakpoint = (): string | undefined => {
  const { width } = useWindowSize();

  const { getComputedStyle } = window;
  const getBreakpoint = useCallback(
    () =>
      isSSR
        ? undefined
        : getComputedStyle(document.body, '::after').content.replace(/"/g, ''),
    // eslint-disable-next-line
    [],
  );
  const [breakpoint, setBreakpoint] = useState(getBreakpoint);

  useEffect(() => {
    setBreakpoint(getBreakpoint);
  }, [width, getBreakpoint]);

  return breakpoint;
};
