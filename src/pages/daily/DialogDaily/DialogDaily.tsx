import { useState } from 'react';
import { FormikValues } from 'formik';
import { AxiosResponse } from 'axios';

import { Container } from '../../../components/layout';
import { useDaily, useSelectedDate } from '../../../hooks';
import {
  HabitStoredOptional,
  HabitWithFinalState,
} from '../../../helpers/globalTypes';
import { successStatus } from '../../../utility/request/statuses';
import { DialogFirstLayer } from './DialogFirstLayer';
import { DialogSecondLayer } from './DialogSecondLayer';
import { initTargetCurrent } from '../../../utility/utils';

interface DialogDailyProps {
  isOpen: boolean;
  habitIndex: number;
  closeDialogFirstLayer: () => void;
  modifyDailyHabitRequest: (
    ...args: HabitStoredOptional[]
  ) => Promise<AxiosResponse<HabitWithFinalState> | undefined>;
  deleteDailyHabitRequest: (
    args: number | undefined,
  ) => Promise<AxiosResponse | undefined>;
}

export const DialogDaily = ({
  isOpen,
  closeDialogFirstLayer,
  habitIndex,
  modifyDailyHabitRequest,
  deleteDailyHabitRequest,
}: DialogDailyProps): JSX.Element | null => {
  const { daily, setDailyStateAndOutcomes } = useDaily();
  const { selectedDate } = useSelectedDate();
  const [isOpenSecondLayer, setIsOpenSecondLayer] = useState<boolean>(false);

  const updateHabitHandler = async (habitValues: FormikValues) => {
    const habitModifies = Object.keys(habitValues).reduce(
      (accumulator, habitKey) => {
        if (habitValues[habitKey] !== daily[habitIndex][habitKey]) {
          accumulator = { ...accumulator, [habitKey]: habitValues[habitKey] };
        }
        return accumulator;
      },
      {
        _id: daily[habitIndex]._id,
        targetCurrent: initTargetCurrent(habitValues.targetType),
      },
    );
    const response = await modifyDailyHabitRequest(habitModifies);
    if (response) {
      const dailyUpdated = daily.map((habit, index) => {
        if (index === habitIndex) {
          return response?.data;
        }
        return habit;
      });

      const dailyUpdatedFilter = dailyUpdated.filter(habit => {
        return habit.selectedDateObj.selectedDateUTS === selectedDate;
      });

      closeDialogFirstLayer();
      setDailyStateAndOutcomes(dailyUpdatedFilter);
    }
  };

  const deleteDailyHabitHandler = async () => {
    if (daily[habitIndex]._id) {
      const response = await deleteDailyHabitRequest(daily[habitIndex]._id);
      if (response && successStatus(response?.status)) {
        const dailyUpdated = daily.filter((habit, index) => {
          return index !== habitIndex ? habit : null;
        });
        setIsOpenSecondLayer(false);
        closeDialogFirstLayer();
        setDailyStateAndOutcomes(dailyUpdated);
      } else {
        closeDialogFirstLayer();
        setIsOpenSecondLayer(false);
      }
    }
  };

  if (isOpen) {
    return (
      <Container
        $pos={{ de: 'absolute' }}
        $w={{ de: '100%' }}
        $mxw={{ de: '600px' }}
      >
        <Container
          $pos={{ de: 'relative' }}
          $w={{ de: '100%' }}
          $h={{ de: '100%' }}
          $jc={{ de: 'center' }}
          $ai={{ de: 'center' }}
        >
          <DialogFirstLayer
            habitIndex={habitIndex}
            submitHandler={updateHabitHandler}
            cancelHandler={closeDialogFirstLayer}
            deleteHandler={() => setIsOpenSecondLayer(true)}
            $dialogLayerIndex={100}
          />
          <DialogSecondLayer
            isOpen={isOpenSecondLayer}
            confirmHandler={deleteDailyHabitHandler}
            discardHandler={() => setIsOpenSecondLayer(false)}
            $dialogLayerIndex={200}
          />
        </Container>
      </Container>
    );
  }
  return null;
};
