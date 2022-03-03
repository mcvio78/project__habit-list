import { useMemo, useState, ReactNode } from 'react';

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
} from './context';
import { themes } from '../config/themes';

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({
  children,
}: ContextProviderProps): JSX.Element => {
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
      value={useMemo(() => ({ userState: [user, setUser] }), [user, setUser])}
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
                  () => ({ loadingCXState: [loadingCX, setLoadingCX] }),
                  [loadingCX, setLoadingCX],
                )}
              >
                {children}
              </LoadingStateCXContext.Provider>
            </SelectedDateContext.Provider>
          </ResultsContext.Provider>
        </DailyContext.Provider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};
