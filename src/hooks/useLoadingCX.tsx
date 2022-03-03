import { useContext, useCallback } from 'react';

import { LoadingCX, LoadingStateCXContext } from '../auth/context';

interface UseLoadingCX {
  loadingCX: LoadingCX;
  setLoadingCXCB: (args: LoadingCX) => void;
}

export const useLoadingCX = (): UseLoadingCX => {
  const { loadingCXState } = useContext(LoadingStateCXContext);
  const [loadingCX, setLoadingCX] = loadingCXState;

  const setLoadingCXCB = useCallback(
    loadingState => {
      setLoadingCX(loadingState);
    },
    [setLoadingCX],
  );

  return { loadingCX, setLoadingCXCB };
};
