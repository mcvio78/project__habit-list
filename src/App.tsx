import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageContainer } from './components/layout';
import { Home } from './pages/Home';
import { SpanLarge } from './components/UI/Typography';
import { useAuth, useTheme } from './hooks/';

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
  const { user, setUserBasedOnToken } = useAuth();
  const { setThemeIfStored } = useTheme();

  useEffect(() => {
    setThemeIfStored();
    setUserBasedOnToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
  );
};
