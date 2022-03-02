import { SetStateAction, useContext, useCallback } from 'react';
import jwtDecode from 'jwt-decode';

import { AuthContext, User } from '../auth/context';
import { authStorage } from '../auth/storage';

interface UseAuthReturn {
  logIn: (args: string) => void;
  logOut: () => void;
  user: User | null;
  setUserContextIfToken: (a: string) => void;
}

export const useAuth = (): UseAuthReturn => {
  const { userState, loadingCXState } = useContext(AuthContext);
  const [user, setUser] = userState;
  const [, setLoadingCX] = loadingCXState;
  let logoutTimeout: ReturnType<typeof setTimeout>;

  const setLoadingCXCB = useCallback(
    status => {
      setLoadingCX(status);
    },
    [setLoadingCX],
  );

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

  return { user, logIn, logOut, setUserContextIfToken };
};
