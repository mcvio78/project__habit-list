import { SetStateAction, useContext } from 'react';
import jwtDecode from 'jwt-decode';

import { AuthContext, User } from '../utility/auth/context';
import { authStorage } from '../utility/auth/storage';

interface UseAuthReturn {
  logIn: (args: string) => void;
  logOut: () => void;
  user: User | null;
  setUserContextIfToken: (a: string) => void;
}

export const useAuth = (): UseAuthReturn => {
  const { user, setUser } = useContext(AuthContext);
  let logoutTimeout: ReturnType<typeof setTimeout>;

  const logOut = () => {
    authStorage.removeToken();
    setUser(null);
    clearTimeout(logoutTimeout);
  };

  const logoutExpiredToken = (authToken: string) => {
    const userJWT: User = jwtDecode(authToken);
    const { exp, iat } = userJWT;
    const expiration = (exp - iat) * 1000;
    logoutTimeout = setTimeout(logOut, expiration);
  };

  const setUserContextIfToken = (authToken: string) => {
    const userJWT = jwtDecode<SetStateAction<null>>(authToken);
    setUser(userJWT);
    logoutExpiredToken(authToken);
  };

  const logIn = (authToken: string) => {
    authStorage.storeToken(authToken);
    setUserContextIfToken(authToken);
  };

  return { user, logIn, logOut, setUserContextIfToken };
};
