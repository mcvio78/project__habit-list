import { useCallback, useEffect } from 'react';

import { useAuth } from '../hooks/useAuth';
import { authStorage } from './storage';
import { authAPI } from '../services/auth';
import { isAxiosError } from '../utility/request/axios';

export const ResetContext = (): null => {
  const { user, setUserContextIfToken } = useAuth();

  const setUserIfStoredToken = useCallback(async () => {
    const authToken = authStorage.getToken();
    if (authToken && user === null) {
      try {
        const isTokenValid = await authAPI.checkTokenValidity();
        if (isTokenValid) {
          setUserContextIfToken(authToken);
        }
      } catch (err) {
        if (isAxiosError(err)) {
          if (err?.response?.status === 401) {
            authStorage.removeToken();
          }
        }
      }
    }
  }, [user, setUserContextIfToken]);

  useEffect(() => {
    setUserIfStoredToken();
  }, [setUserIfStoredToken]);

  return null;
};
