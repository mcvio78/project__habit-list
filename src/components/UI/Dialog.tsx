import { useCallback } from 'react';
import styled from 'styled-components/macro';
import { FormikValues } from 'formik';
import * as Yup from 'yup';

import { Backdrop } from './Backdrop';
import { Container } from '../layout';
import { HeadingExtraSmall, HeadingLarge } from './Typography';
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
import { useAPI, useDaily } from '../../hooks';
import { habitAPI } from '../../services/habit';
import { HabitCollected } from '../../helpers/globalTypes';
import { TargetType } from '../../helpers/constants';
import { AppButton } from './button';
import { dateToUTC } from '../../utility/utils';

interface DialogProps {
  habitIndex: number;
  isOpen: boolean;
  onClose: () => void;
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
  expirationDate: Yup.date()
    .nullable()
    .required('Date is required')
    .label('ExpirationDate'),
});

const DialogContainer = styled(Container)`
  background-color: var(--secondary_06);
  border-radius: 8px;
  z-index: 100;
`;

export const Dialog = ({
  isOpen,
  onClose,
  habitIndex,
}: DialogProps): JSX.Element | null => {
  const { request } = useAPI(habitAPI.createHabit);
  const { daily } = useDaily();

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
      daily[habitIndex].expirationDate ===
        dateToUTC(new Date(values.expirationDate))
    );
  };

  const updateHabitHandler = useCallback(
    (habitValues: FormikValues) => {
      request(habitValues);
    },
    [request],
  );

  if (isOpen) {
    return (
      <>
        <Backdrop isOpen={isOpen} />
        <DialogContainer
          $pos={{ de: 'absolute' }}
          $w={{ de: '100%' }}
          $mxw={{ de: '600px' }}
          $jc={{ de: 'center' }}
          $p={{ de: '36px 16px' }}
        >
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
                      <HeadingLarge>Habit</HeadingLarge>
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
                        <Container $fd={{ de: 'column' }}>
                          <HeadingLarge>...and my target is:</HeadingLarge>
                          <HeadingExtraSmall>(optional)</HeadingExtraSmall>
                        </Container>
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
                    $label="Select a Date"
                    placeholder="Select a Date"
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
      </>
    );
  }
  return null;
};
