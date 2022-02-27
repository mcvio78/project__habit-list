import { useCallback, useMemo, useState } from 'react';

interface UseToggle {
  status: boolean;
  toggleStatus: () => void;
}

export const useToggle = (): UseToggle => {
  const [status, setStatus] = useState(false);

  const toggleStatus = useCallback(() => {
    setStatus(prevStatus => !prevStatus);
  }, []);

  return useMemo(
    () => ({
      status,
      toggleStatus,
    }),
    [status, toggleStatus],
  );
};
