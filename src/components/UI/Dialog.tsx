import { useState } from 'react';
import styled from 'styled-components/macro';
import { FormikValues } from 'formik';
import * as Yup from 'yup';
import { AxiosResponse } from 'axios';

import { Backdrop } from './Backdrop';
import { Container } from '../layout';
import { HeadingLarge } from './Typography';
import {
  AppForm,
  AppFormCheckbox,
  AppFormInputDate,
  AppFormInputText,
  AppFormSubmit,
} from '../form';
import { ReactComponent as RepeatSVG } from '../../assets/icons/icon-repeat_24dp.svg';
import { ReactComponent as CalculateSVG } from '../../assets/icons/icon-calculate_24dp.svg';
import { ReactComponent as SegmentSVG } from '../../assets/icons/icon-segment_24dp.svg';
import { ReactComponent as EventSVG } from '../../assets/icons/icon-event_24dp.svg';
import { useDaily } from '../../hooks';
import {
  HabitCollected,
  HabitStoredOptional,
  HabitWithFinalState,
} from '../../helpers/globalTypes';
import { TargetType } from '../../helpers/constants';
import { AppButton } from './button';
import { successStatus } from '../../utility/request/statuses';

interface DialogProps {
  habitIndex: number;
  isOpen: boolean;
  onClose: () => void;
  modifyDailyHabitRequest: (
    ...args: HabitStoredOptional[]
  ) => Promise<AxiosResponse<HabitWithFinalState> | undefined>;
  deleteDailyHabitRequest: (
    args: number | undefined,
  ) => Promise<AxiosResponse<any, any> | undefined>;
}

const validationSchemaHabit = Yup.object().shape({
  habitType: Yup.string().required('Habit type is required').label('HabitType'),
  habitName: Yup.string().required('Habit name is required').label('HabitName'),
  targetType: Yup.string().label('TargetType'),
  targetValue: Yup.number()
    .nullable()
    .when('targetType', {
      is: (TgtType: HabitCollected['targetType']) =>
        TgtType === TargetType.min || TgtType === TargetType.max,
      then: Yup.number()
        .nullable()
        .required('Amount is required')
        .label('TargetValue'),
    }),
  targetUnit: Yup.string().when('targetType', {
    is: (TgtType: HabitCollected['targetType']) =>
      TgtType === TargetType.min || TgtType === TargetType.max,
    then: Yup.string().required('Target unit is required').label('TargetUnit'),
  }),
  expirationDate: Yup.number()
    .nullable()
    .required('Date is required')
    .label('ExpirationDate'),
});

const DialogContainer = styled(Container)`
  background-color: var(--secondary_06);
  border-radius: 8px;
`;

const DeleteModalContainer = styled(Container)`
  background-color: var(--secondary_05);
  border-radius: 8px;
`;

export const Dialog = ({
  isOpen,
  onClose,
  habitIndex,
  modifyDailyHabitRequest,
  deleteDailyHabitRequest,
}: DialogProps): JSX.Element | null => {
  const { daily, setDailyStateAndOutcomes } = useDaily();
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);

  const habitStoredValues =
    habitIndex !== null
      ? {
          habitType: daily[habitIndex].habitType,
          habitName: daily[habitIndex].habitName,
          targetType: daily[habitIndex].targetType,
          targetValue: daily[habitIndex].targetValue,
          targetCurrent: daily[habitIndex].targetCurrent,
          targetUnit: daily[habitIndex].targetUnit,
          expirationDate: daily[habitIndex].expirationDate,
        }
      : {};

  const checkVariations = (values: FormikValues) => {
    return (
      daily[habitIndex].habitName === values.habitName &&
      daily[habitIndex].habitType === values.habitType &&
      daily[habitIndex].targetType === values.targetType &&
      daily[habitIndex].targetValue === values.targetValue &&
      daily[habitIndex].targetCurrent === values.targetCurrent &&
      daily[habitIndex].targetUnit === values.targetUnit &&
      daily[habitIndex].expirationDate === values.expirationDate
    );
  };

  const updateHabitHandler = async (habitValues: FormikValues) => {
    const habitModifies = Object.keys(habitValues).reduce(
      (accumulator, habitKey) => {
        if (habitValues[habitKey] !== daily[habitIndex][habitKey]) {
          accumulator = { ...accumulator, [habitKey]: habitValues[habitKey] };
        }
        return accumulator;
      },
      { _id: daily[habitIndex]._id },
    );
    const response = await modifyDailyHabitRequest(habitModifies);
    if (response) {
      const dailyUpdated = daily.map((habit, index) => {
        if (index === habitIndex) {
          return response?.data;
        }
        return habit;
      });
      setDailyStateAndOutcomes(dailyUpdated);
    }
    onClose();
  };

  const deleteDailyHabitHandler = async () => {
    if (daily[habitIndex]._id) {
      const response = await deleteDailyHabitRequest(daily[habitIndex]._id);
      if (response && successStatus(response?.status)) {
        const dailyUpdated = daily.filter((habit, index) => {
          return index !== habitIndex ? habit : null;
        });
        setIsOpenDelete(false);
        onClose();
        setDailyStateAndOutcomes(dailyUpdated);
      } else {
        setIsOpenDelete(false);
        onClose();
      }
    }
  };

  if (isOpen) {
    return (
      <>
        <Backdrop
          isOpen={isOpen}
          $pos={{ de: 'fixed' }}
          $top={{ de: 0 }}
          $lt={{ de: 0 }}
          $w={{ de: '100%' }}
          $h={{ de: '100%' }}
          $jc={{ de: 'center' }}
          $ai={{ de: 'flex-start' }}
          $zi={{ de: 100 }}
          $bs={{ de: 'border-box' }}
        >
          <DialogContainer
            $pos={{ de: 'relative' }}
            $w={{ de: '100%' }}
            $mxw={{ de: '600px' }}
            $mt={{ de: '6%' }}
            $jc={{ de: 'center' }}
            $p={{ de: '36px 16px' }}
            $zi={{ de: 100 }}
          >
            <Backdrop
              isOpen={isOpenDelete}
              $pos={{ de: 'absolute' }}
              $top={{ de: 0 }}
              $lt={{ de: 0 }}
              $w={{ de: '100%' }}
              $h={{ de: '100%' }}
              $jc={{ de: 'center' }}
              $ai={{ de: 'center' }}
              $zi={{ de: 200 }}
              $bs={{ de: 'border-box' }}
            >
              <DeleteModalContainer
                $fd={{ de: 'column' }}
                $g={{ de: '12px' }}
                $p={{ de: '24px' }}
                $zi={{ de: 200 }}
              >
                <HeadingLarge>Are you sure?</HeadingLarge>
                <Container $jc={{ de: 'space-between' }} $miw={{ de: '160px' }}>
                  <AppButton
                    $variant="alert"
                    $size="medium"
                    $bold
                    title="Button to confirm deleting"
                    aria-label="button to confirm deleting"
                    onClick={deleteDailyHabitHandler}
                  >
                    Yes
                  </AppButton>
                  <AppButton
                    $variant="flat"
                    $size="medium"
                    $bold
                    title="Button to discard deleting"
                    aria-label="button to discard deleting"
                    onClick={() => setIsOpenDelete(false)}
                  >
                    Cancel
                  </AppButton>
                </Container>
              </DeleteModalContainer>
            </Backdrop>
            <Container
              $mxw={{ de: '80%' }}
              $fd={{ de: 'column' }}
              $g={{ de: '12px' }}
              $zi={{ de: 100 }}
            >
              <AppForm
                enableReinitialize
                initialValues={habitStoredValues}
                onSubmit={values => updateHabitHandler(values)}
                validationSchema={validationSchemaHabit}
              >
                {({ values }) => (
                  <>
                    <Container $fd={{ de: 'column' }} $g={{ de: '12px' }}>
                      <Container $fd={{ de: 'column' }} $g={{ de: '12px' }}>
                        <Container $fd={{ de: 'column' }}>
                          <AppButton
                            $variant="alert"
                            $size="medium"
                            $mb={{ de: '8px' }}
                            $flxAs={{ de: 'flex-end' }}
                            $bold
                            title="Delete habit"
                            aria-label="delete habit"
                            onClick={() => setIsOpenDelete(true)}
                          >
                            Delete
                          </AppButton>
                          <HeadingLarge>Habit</HeadingLarge>
                        </Container>
                        <Container
                          $fd={{ de: 'column' }}
                          $g={{ de: '12px' }}
                          role="group"
                          aria-labelledby="checkbox-group"
                        >
                          <AppFormCheckbox
                            id="toDo"
                            name="habitType"
                            value="toDo"
                            $labelText="ToDo"
                            $showError={false}
                          />
                          <AppFormCheckbox
                            id="avoid"
                            name="habitType"
                            value="avoid"
                            $labelText="Avoid"
                          />
                        </Container>
                      </Container>
                      <AppFormInputText
                        type="text"
                        id="habitName"
                        name="habitName"
                        IconSVG={RepeatSVG}
                        $label="Habit"
                        placeholder="Habit Name"
                        autoCapitalize="off"
                        spellCheck={false}
                      />
                      {values.habitType === 'toDo' && (
                        <Container $fd={{ de: 'column' }} $g={{ de: '12px' }}>
                          <HeadingLarge>target</HeadingLarge>
                          <Container
                            $fd={{ de: 'column' }}
                            $g={{ de: '12px' }}
                            role="group"
                            aria-labelledby="checkbox-group"
                          >
                            <AppFormCheckbox
                              id="min"
                              name="targetType"
                              value="min"
                              $labelText="Min"
                              disabled={values.habitType === 'avoid'}
                              $showError={false}
                            />
                            <AppFormCheckbox
                              id="max"
                              name="targetType"
                              value="max"
                              $labelText="Max"
                              disabled={values.habitType === 'avoid'}
                            />
                          </Container>
                          {values.targetType !== '' && (
                            <>
                              <AppFormInputText
                                type="number"
                                id="targetValue"
                                name="targetValue"
                                IconSVG={CalculateSVG}
                                $label="Amount"
                                placeholder="Target Amount"
                                min="1"
                              />
                              <AppFormInputText
                                type="string"
                                id="targetUnit"
                                name="targetUnit"
                                IconSVG={SegmentSVG}
                                $label="Unit"
                                placeholder="Target Unit"
                                autoCapitalize="off"
                                spellCheck={false}
                              />
                            </>
                          )}
                        </Container>
                      )}
                    </Container>
                    <AppFormInputDate
                      type="date"
                      id="habit-date"
                      name="expirationDate"
                      IconSVG={EventSVG}
                      $label="Date"
                      placeholder="Date"
                    />
                    <Container $jc={{ de: 'flex-end' }} $g={{ de: '16px' }}>
                      <AppButton
                        $variant="flat"
                        $size="medium"
                        title="Cancel"
                        aria-label="cancel and go back"
                        $flxAs={{ de: 'flex-end' }}
                        $mt={{ de: '8px' }}
                        $bold
                        onClick={onClose}
                      >
                        Cancel
                      </AppButton>
                      <AppFormSubmit
                        $variant="flat"
                        $size="medium"
                        $labelShadow
                        title="Save"
                        aria-label="save habit changes"
                        $flxAs={{ de: 'flex-end' }}
                        $mt={{ de: '8px' }}
                        $bold
                        disabled={checkVariations(values)}
                      >
                        Save
                      </AppFormSubmit>
                    </Container>
                  </>
                )}
              </AppForm>
            </Container>
          </DialogContainer>
        </Backdrop>
      </>
    );
  }
  return null;
};
