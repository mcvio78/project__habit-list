import { useCallback, useState } from 'react';

import { isSSR } from '../utility/utils';
import { useResize } from './useResize';

export const useWindowSize = (
  wait = 250,
): {
  width?: number;
  height?: number;
} => {
  const getWindowSize = useCallback(
    () => ({
      width: isSSR ? undefined : window.innerWidth,
      height: isSSR ? undefined : window.innerHeight,
    }),
    [],
  );

  const [windowSize, setWindowSize] = useState(getWindowSize);

  useResize(() => {
    setWindowSize(getWindowSize);
  }, wait);

  return windowSize;
};
