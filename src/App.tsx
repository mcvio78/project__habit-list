import React, { useState, Suspense, lazy, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageContainer } from './components/layout';
import { Home } from './pages/Home';
import {
  AuthContext,
  ThemeContext,
  DailyContext,
  ResultsContext,
  SelectedDateContext,
  LoadingStateCXContext,
  DailyHabits,
  SelectedDate,
  Theme,
} from './auth/context';
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
  const [theme, setTheme] = useState<Theme>(themes[0]);
  const [daily, setDaily] = useState<DailyHabits>([]);
  const [results, setResults] = useState({
    dailyResult: { pending: 0, successful: 0, failed: 0, postponed: 0 },
    weeklyResult: { pending: 0, successful: 0, failed: 0, postponed: 0 },
    monthlyResult: { pending: 0, successful: 0, failed: 0, postponed: 0 },
  });
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(null);
  const [loadingCX, setLoadingCX] = useState(false);

  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({
          userState: [user, setUser],
        }),
        [user, setUser],
      )}
    >
      <ThemeContext.Provider
        value={useMemo(
          () => ({ themeState: [theme, setTheme] }),
          [theme, setTheme],
        )}
      >
        <DailyContext.Provider
          value={useMemo(
            () => ({ dailyState: [daily, setDaily] }),
            [daily, setDaily],
          )}
        >
          <ResultsContext.Provider
            value={useMemo(
              () => ({ resultsState: [results, setResults] }),
              [results, setResults],
            )}
          >
            <SelectedDateContext.Provider
              value={useMemo(
                () => ({ selectedDateState: [selectedDate, setSelectedDate] }),
                [selectedDate, setSelectedDate],
              )}
            >
              <LoadingStateCXContext.Provider
                value={useMemo(
                  () => ({
                    loadingCXState: [loadingCX, setLoadingCX],
                  }),
                  [loadingCX, setLoadingCX],
                )}
              >
                <ResetContext />
                <PageContainer>
                  <Suspense fallback={<SpanLarge>Loading...</SpanLarge>}>
                    <Routes>
                      <Route path="/auth" element={<AuthLazy />} />
                      {user && (
                        <Route path="/account" element={<AccountLazy />} />
                      )}
                      <Route path="/settings" element={<SettingsLazy />} />
                      {user && (
                        <Route path="/create" element={<CreateLazy />} />
                      )}
                      {user && <Route path="/daily" element={<DailyLazy />} />}
                      <Route path="/" element={<Home />} />
                    </Routes>
                  </Suspense>
                </PageContainer>
              </LoadingStateCXContext.Provider>
            </SelectedDateContext.Provider>
          </ResultsContext.Provider>
        </DailyContext.Provider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};
