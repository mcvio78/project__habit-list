import styled from 'styled-components/macro';
import { FormikValues } from 'formik';
import * as Yup from 'yup';

import { Backdrop } from '../../../components/UI/Backdrop';
import { Container } from '../../../components/layout';
import {
  AppForm,
  AppFormCheckbox,
  AppFormInputDate,
  AppFormInputText,
  AppFormSubmit,
} from '../../../components/form';
import { AppButton } from '../../../components/UI/button';
import { HeadingLarge } from '../../../components/UI/Typography';
import { ReactComponent as RepeatSVG } from '../../../assets/icons/icon-repeat_24dp.svg';
import { ReactComponent as CalculateSVG } from '../../../assets/icons/icon-calculate_24dp.svg';
import { ReactComponent as SegmentSVG } from '../../../assets/icons/icon-segment_24dp.svg';
import { ReactComponent as EventSVG } from '../../../assets/icons/icon-event_24dp.svg';
import { HabitCollected } from '../../../helpers/globalTypes';
import { TargetType } from '../../../helpers/constants';
import { useDaily } from '../../../hooks';

interface DialogFirstLayerProps {
  habitIndex: number;
  submitHandler: (args: FormikValues) => void;
  cancelHandler: () => void;
  deleteHandler: () => void;
  $dialogLayerIndex: number;
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
  selectedDateObj: Yup.object()
    .shape({
      selectedDateString: Yup.string().required('Date is required').nullable(),
      selectedDateISO: Yup.string().required('Date is required').nullable(),
      selectedDateTsUTC: Yup.number().required('Date is required').nullable(),
      selectedDateUTS: Yup.number().required('Date is required').nullable(),
      timezone: Yup.string().required('Date is required').nullable(),
    })
    .label('SelectedDateObj'),
});

const DialogContainer = styled(Container)`
  background-color: var(--secondary_06);
  border-radius: 8px;
`;

export const DialogFirstLayer = ({
  habitIndex,
  submitHandler,
  cancelHandler,
  deleteHandler,
  $dialogLayerIndex,
}: DialogFirstLayerProps): JSX.Element | null => {
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
          selectedDateObj: daily[habitIndex].selectedDateObj,
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
      daily[habitIndex].selectedDateObj.selectedDateUTS ===
        values.selectedDateObj.selectedDateUTS
    );
  };

  return (
    <>
      <Backdrop
        isOpen
        $pos={{ de: 'fixed' }}
        $top={{ de: 0 }}
        $lt={{ de: 0 }}
        $w={{ de: '100%' }}
        $h={{ de: '100%' }}
        $zi={{ de: $dialogLayerIndex }}
        $bs={{ de: 'border-box' }}
      />
      <DialogContainer
        $w={{ de: '100%' }}
        $mxw={{ sm: '600px' }}
        $jc={{ de: 'center' }}
        $p={{ de: '36px 16px' }}
        $zi={{ de: $dialogLayerIndex }}
      >
        <Container $fd={{ de: 'column' }} $g={{ de: '12px' }}>
          <AppForm
            enableReinitialize
            initialValues={habitStoredValues}
            onSubmit={values => submitHandler(values)}
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
                        onClick={deleteHandler}
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
                  name="selectedDateObj"
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
                    onClick={cancelHandler}
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
};
