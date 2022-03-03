import { useContext, useCallback } from 'react';

import {
  DailyContext,
  DailyHabits,
  Results,
  ResultsContext,
} from '../auth/context';
import { addHabitsFinalState, calculateResults } from '../utility/utils';
import { HabitStored } from '../helpers/globalTypes';

interface UseDaily {
  daily: DailyHabits;
  setDailyCB: (args: DailyHabits) => void;
  setDailyOutcomes: (args: DailyHabits) => void;
}

export const useDaily = (): UseDaily => {
  const { dailyState } = useContext(DailyContext);
  const [daily, setDaily] = dailyState;
  const { resultsState } = useContext(ResultsContext);
  const [, setResults] = resultsState;

  const setDailyCB = useCallback(
    dailyArray => {
      setDaily(dailyArray);
    },
    [setDaily],
  );

  const setResultsCB = useCallback(
    globalResultsState => {
      setResults(globalResultsState);
    },
    [setResults],
  );

  const setDailyOutcomes = (dailyHabits: HabitStored[] | []) => {
    const dailyHabitsFinalState = addHabitsFinalState(dailyHabits);
    setDailyCB(dailyHabitsFinalState);
    const currentDailyResults = calculateResults(dailyHabitsFinalState);
    setResultsCB((prevState: Results) => ({
      ...prevState,
      dailyResult: { ...currentDailyResults },
    }));
  };

  return { daily, setDailyCB, setDailyOutcomes };
};
