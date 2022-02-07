import { useCallback } from 'react';
import { FormikValues } from 'formik';
import * as Yup from 'yup';

import { PageLayout, Container } from '../components/layout';
import { Header } from '../components/UI/Header';
import { Toolbar } from '../components/layout/Toolbar';
import {
  AppForm,
  AppFormInputText,
  AppFormSubmit,
  AppFormInputDate,
  AppFormCheckbox,
} from '../components/form';
import { ReactComponent as RepeatSVG } from '../assets/icons/icon-repeat_24dp.svg';
import { ReactComponent as EventSVG } from '../assets/icons/icon-event_24dp.svg';
import { ReactComponent as CalculateSVG } from '../assets/icons/icon-calculate_24dp.svg';
import {
  HeadingExtraSmall,
  HeadingLarge,
  B,
} from '../components/UI/Typography';

const validationSchemaHabit = Yup.object().shape({
  habitType: Yup.string().required('Habit type is required').label('HabitType'),
  habitName: Yup.string().required('Habit name is required').label('HabitName'),
  targetType: Yup.string().label('TargetType'),
  targetAmount: Yup.number()
    .nullable()
    .when('targetType', {
      is: (TargetType: InitialValuesCreate['targetType']) =>
        TargetType === 'min' || TargetType === 'max',
      then: Yup.number()
        .nullable()
        .required('Amount is required')
        .label('HabitAmount'),
    }),
  habitDate: Yup.date()
    .nullable()
    .required('Date is required')
    .label('StartDate'),
});

export interface InitialValuesCreate {
  habitType: 'toDo' | 'avoid' | '';
  habitName: string;
  targetType: 'min' | 'max' | '';
  targetAmount: number | null;
  habitDate: Date | null;
}

export const initialValuesCreate: InitialValuesCreate = {
  habitType: '',
  habitName: '',
  targetType: '',
  targetAmount: null,
  habitDate: null,
};

export const Create = (): JSX.Element => {
  const submitFormHandler = useCallback(async (habitValues: FormikValues) => {
    /* eslint-disable */
    console.log('habitValues: ', habitValues);
  }, []);

  return (
    <PageLayout>
      <Toolbar>
        <p>Something here?</p>
      </Toolbar>
      <Header $header="Create" $subHeader="Habit" />
      <Container
        $fd={{ de: 'column' }}
        $mt={{ de: '20px' }}
        $g={{ de: '12px' }}
      >
        <AppForm
          enableReinitialize
          initialValues={initialValuesCreate}
          onSubmit={values => submitFormHandler(values)}
          validationSchema={validationSchemaHabit}
        >
          {({ values }) => (
            <>
              <Container $fd={{ de: 'column' }} $g={{ de: '12px' }}>
                <Container $fd={{ de: 'column' }} $g={{ de: '12px' }}>
                  <HeadingLarge>I want...</HeadingLarge>
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
                {values['habitType'] === 'toDo' && (
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
                        disabled={values['habitType'] === 'avoid'}
                        $showError={false}
                      />
                      <AppFormCheckbox
                        id="max"
                        name="targetType"
                        value="max"
                        $labelText="Max"
                        disabled={values['habitType'] === 'avoid'}
                      />
                    </Container>
                    {values['targetType'] !== '' && (
                      <AppFormInputText
                        type="number"
                        id="targetAmount"
                        name="targetAmount"
                        IconSVG={CalculateSVG}
                        $label="Amount"
                        placeholder="Target Amount"
                        min="1"
                      />
                    )}
                  </Container>
                )}
              </Container>
              <AppFormInputDate
                type="date"
                id="habit-date"
                name="habitDate"
                IconSVG={EventSVG}
                $label="Select a Date"
                placeholder="Select a Date"
              />
              <AppFormSubmit
                $variant="flat"
                $size="medium"
                $labelShadow
                title="Create"
                aria-label="create habit"
                $flxAs={{ de: 'flex-end' }}
                $mt={{ de: '8px' }}
              >
                <B>Create</B>
              </AppFormSubmit>
            </>
          )}
        </AppForm>
      </Container>
    </PageLayout>
  );
};
