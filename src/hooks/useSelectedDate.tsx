import { useContext, useCallback } from 'react';

import { SelectedDate, SelectedDateContext } from '../auth/context';

interface UseSelectedDate {
  selectedDate: SelectedDate;
  setSelectedDateCB: (args: number) => void;
}

export const useSelectedDate = (): UseSelectedDate => {
  const { selectedDateState } = useContext(SelectedDateContext);
  const [selectedDate, setSelectedDate] = selectedDateState;

  const setSelectedDateCB = useCallback(
    unixDate => {
      setSelectedDate(unixDate);
    },
    [setSelectedDate],
  );

  return { selectedDate, setSelectedDateCB };
};
