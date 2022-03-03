import { useEffect, useRef, DependencyList } from 'react';

export const useEffectSelective = (
  onlyMountFn: () => void,
  recursiveFn: () => void,
  deps: DependencyList | undefined,
): void => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      recursiveFn();
    } else {
      onlyMountFn();
      didMount.current = true;
    }
  }, deps); /* eslint-disable-line */
};
