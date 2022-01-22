import { createContext, Dispatch, SetStateAction } from 'react';

import { themes } from '../config/constants/themes';

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

type UserState = [User | null, Dispatch<SetStateAction<null>>];

export type Theme = typeof themes[number];

type ThemeState = [Theme, Dispatch<SetStateAction<string>>];

interface CreateContext {
  userState: UserState;
  themeState: ThemeState;
}

const initialContext = {} as CreateContext;

export const AuthContext = createContext<CreateContext>(initialContext);
