import { SetStateAction, useContext, useCallback } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { AuthContext, User } from '../auth/context';
import { authStorage } from '../auth/storage';
import { useLoadingCX } from './useLoadingCX';
import { authAPI } from '../services/auth';
import { isAxiosError } from '../utility/request/axios';

interface UseAuth {
  logIn: (args: string) => void;
  logOut: () => void;
  user: User | null;
  setUserCB: (args: User) => void;
  setUserValidToken: (args: string) => void;
  setUserBasedOnToken: () => void;
}

export const useAuth = (): UseAuth => {
  const { userState } = useContext(AuthContext);
  if (userState === undefined) {
    throw new Error('userState was used outside of its Provider');
  }
  const [user, setUser] = userState;
  const { setLoadingCXCB } = useLoadingCX();
  let logoutTimeout: ReturnType<typeof setTimeout>;
  const navigate = useNavigate();

  const setUserCB = useCallback(
    userData => {
      setUser(userData);
    },
    [setUser],
  );

  const logOut = () => {
    authStorage.removeToken();
    setUserCB(null);
    clearTimeout(logoutTimeout);
  };

  const logoutExpiredToken = (authToken: string) => {
    const userJWT: User = jwtDecode(authToken);
    const { exp, iat } = userJWT;
    const expiration = (exp - iat) * 1000;
    logoutTimeout = setTimeout(logOut, expiration);
  };

  const setUserValidToken = (authToken: string) => {
    setLoadingCXCB(true);
    const userJWT = jwtDecode<SetStateAction<null>>(authToken);
    setUserCB(userJWT);
    logoutExpiredToken(authToken);
    setLoadingCXCB(false);
  };

  const logIn = (authToken: string) => {
    authStorage.storeToken(authToken);
    setUserValidToken(authToken);
  };

  const setUserBasedOnToken = async () => {
    const authToken = authStorage.getToken();

    if (authToken && user === null) {
      try {
        const isTokenValid = await authAPI.checkTokenValidity();
        if (isTokenValid) {
          setUserValidToken(authToken);
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
  };

  return {
    user,
    setUserCB,
    logIn,
    logOut,
    setUserValidToken,
    setUserBasedOnToken,
  };
};
