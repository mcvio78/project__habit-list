import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { authStorage } from './storage';
import { themeStorage } from '../theme/storage';
import { authAPI } from '../services/auth';
import { isAxiosError } from '../utility/request/axios';
import { useTheme } from '../hooks/useTheme';

export const ResetContext = (): null => {
  const { user, setUserContextIfToken } = useAuth();
  const { setDefaultTheme, setSelectedTheme } = useTheme();
  const navigate = useNavigate();

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
            navigate('/');
          }
        }
      }
    }
  }, [user, setUserContextIfToken, navigate]);

  const setTheme = useCallback(() => {
    const theme = themeStorage.getTheme();

    if (theme) {
      setSelectedTheme(theme);
    } else {
      setDefaultTheme();
    }
  }, [setSelectedTheme, setDefaultTheme]);

  useEffect(() => {
    setUserIfStoredToken();
    setTheme();
  }, [setUserIfStoredToken, setTheme]);

  return null;
};
