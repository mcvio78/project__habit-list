import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageContainer } from './components/layout';
import { Home } from './pages/Home';
import { AuthContext } from './auth/context';
import { ResetContext } from './auth/ResetContext';
import { themes } from './config/constants/themes';

const AuthLazy = lazy(() =>
  import('./pages/Auth').then(({ Auth }) => ({
    default: Auth,
  })),
);

const AccountLazy = lazy(() =>
  import('./pages/Account').then(({ Account }) => ({
    default: Account,
  })),
);

const SettingsLazy = lazy(() =>
  import('./pages/Settings').then(({ Settings }) => ({
    default: Settings,
  })),
);

const CreateLazy = lazy(() =>
  import('./pages/Create').then(({ Create }) => ({
    default: Create,
  })),
);

export const App = (): JSX.Element => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(themes[0]);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line
      value={{ userState: [user, setUser], themeState: [theme, setTheme] }}
    >
      <ResetContext />
      <PageContainer>
        <Suspense fallback={<span>Loading...</span>}>
          <Routes>
            <Route path="/auth" element={<AuthLazy />} />
            {user && <Route path="/account" element={<AccountLazy />} />}
            <Route path="/settings" element={<SettingsLazy />} />
            {user && <Route path="/create" element={<CreateLazy />} />}
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </PageContainer>
    </AuthContext.Provider>
  );
};
