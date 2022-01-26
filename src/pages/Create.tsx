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
} from '../components/form';
import { ReactComponent as RepeatSVG } from '../assets/icons/icon-repeat_24dp.svg';
import { ReactComponent as EventSVG } from '../assets/icons/icon-event_24dp.svg';
import { ReactComponent as CalculateSVG } from '../assets/icons/icon-calculate_24dp.svg';
import { AppCheckbox } from '../components/UI/checkbox/AppCheckbox';

const validationSchemaHabit = Yup.object().shape({
  habitName: Yup.string().required('Habit name is required').label('HabitName'),
  startDate: Yup.date()
    .nullable()
    .required('Date is required')
    .label('StartDate'),
});

const initialValues = {
  habitName: '',
  startDate: null,
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
        $mt={{ de: '60px' }}
        $g={{ de: '12px' }}
      >
        <AppForm
          enableReinitialize
          initialValues={initialValues}
          onSubmit={values => submitFormHandler(values)}
          validationSchema={validationSchemaHabit}
        >
          <>
            <Container>
              <Container
                $w={{ de: '50%' }}
                $fd={{ de: 'column' }}
                $g={{ de: '12px' }}
              >
                <AppCheckbox
                  id="do"
                  checked={false}
                  onChange={() => {}}
                  labelText="Do"
                  forLblAttr="do"
                />
                <AppCheckbox
                  id="not-do"
                  checked={false}
                  onChange={() => {}}
                  labelText="Do Not"
                  forLblAttr="not-do"
                />
              </Container>
              <Container
                $w={{ de: '50%' }}
                $fd={{ de: 'column' }}
                $g={{ de: '12px' }}
              >
                <AppCheckbox
                  id="do-min"
                  checked={false}
                  onChange={() => {}}
                  labelText="Do Min"
                  forLblAttr="do-min"
                />
                <AppCheckbox
                  id="do-max"
                  checked={false}
                  onChange={() => {}}
                  labelText="Do Max"
                  forLblAttr="do-max"
                />
              </Container>
            </Container>
            <AppFormInputText
              IconSVG={RepeatSVG}
              $label="Activity"
              id="activity"
              type="text"
              name="activity"
              placeholder="Activity Name"
              autocapitalize="off"
              spellcheck={false}
            />
            <AppFormInputText
              IconSVG={CalculateSVG}
              $label="Amount"
              id="amount"
              type="number"
              name="amount"
              placeholder="Amount"
            />
            <AppFormInputDate
              IconSVG={EventSVG}
              $label="Select a Date"
              id="start-date"
              type="date"
              name="startDate"
              placeholder="Select a Date"
            />
            <AppFormSubmit
              $flat
              $md
              $lblSdw
              $lblB
              title="Create"
              aria-label="create habit"
              $flxAs={{ de: 'flex-end' }}
              $mt={{ de: '8px' }}
            >
              Create
            </AppFormSubmit>
          </>
        </AppForm>
      </Container>
    </PageLayout>
  );
};
