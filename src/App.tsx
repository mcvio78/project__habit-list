import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageContainer } from './components/layout';
import { Home } from './pages/Home';
import { AuthContext } from './auth/context';
import { ResetContext } from './auth/ResetContext';
import { themes } from './config/themes';
import { SpanLarge } from './components/UI/Typography';

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

const DailyLazy = lazy(() =>
  import('./pages/daily/Daily').then(({ Daily }) => ({
    default: Daily,
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
        <Suspense fallback={<SpanLarge>Loading...</SpanLarge>}>
          <Routes>
            <Route path="/auth" element={<AuthLazy />} />
            {user && <Route path="/account" element={<AccountLazy />} />}
            <Route path="/settings" element={<SettingsLazy />} />
            {user && <Route path="/create" element={<CreateLazy />} />}
            {user && <Route path="/daily" element={<DailyLazy />} />}
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </PageContainer>
    </AuthContext.Provider>
  );
};
