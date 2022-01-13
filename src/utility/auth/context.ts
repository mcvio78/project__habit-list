import { createContext, Dispatch, SetStateAction } from 'react';

export interface User {
  aud: string;
  email: string;
  exp: number;
  iat: number;
  iss: string;
  name: string;
  nbf: number;
  permissions: string[];
  sub: string;
  user_id: string;
}

interface CreateContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<null>>;
}

const initialContext = {} as CreateContext;

export const AuthContext = createContext<CreateContext>(initialContext);
