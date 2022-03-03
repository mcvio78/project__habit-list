import { useContext, useCallback } from 'react';

import { Results, ResultsContext } from '../auth/context';

interface UseResults {
  results: Results;
  setResultsCB: (args: Results) => void;
}

export const useResults = (): UseResults => {
  const { resultsState } = useContext(ResultsContext);
  if (resultsState === undefined) {
    throw new Error('resultsState was used outside of its Provider');
  }
  const [results, setResults] = resultsState;

  const setResultsCB = useCallback(
    resultsObj => {
      setResults(resultsObj);
    },
    [setResults],
  );

  return { results, setResultsCB };
};
