import { SetStateAction, useContext, useCallback } from 'react';
import jwtDecode from 'jwt-decode';

import { AuthContext, User } from '../auth/context';
import { authStorage } from '../auth/storage';
import { useLoadingCX } from './useLoadingCX';

interface UseAuth {
  logIn: (args: string) => void;
  logOut: () => void;
  user: User | null;
  setUserCB: (args: User) => void;
  setUserContextIfToken: (a: string) => void;
}

export const useAuth = (): UseAuth => {
  const { userState } = useContext(AuthContext);
  if (userState === undefined) {
    throw new Error('userState was used outside of its Provider');
  }
  const [user, setUser] = userState;
  const { setLoadingCXCB } = useLoadingCX();
  let logoutTimeout: ReturnType<typeof setTimeout>;

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

  const setUserContextIfToken = (authToken: string) => {
    setLoadingCXCB(true);
    const userJWT = jwtDecode<SetStateAction<null>>(authToken);
    setUserCB(userJWT);
    logoutExpiredToken(authToken);
    setLoadingCXCB(false);
  };

  const logIn = (authToken: string) => {
    authStorage.storeToken(authToken);
    setUserContextIfToken(authToken);
  };

  return { user, setUserCB, logIn, logOut, setUserContextIfToken };
};
