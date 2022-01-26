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
        $g={{ de: '20px' }}
      >
        <AppForm
          enableReinitialize
          initialValues={initialValues}
          onSubmit={values => submitFormHandler(values)}
          validationSchema={validationSchemaHabit}
        >
          <>
            <AppFormInputText
              IconSVG={RepeatSVG}
              $label="Habit Name"
              id="habit"
              type="text"
              name="habitName"
              placeholder="Habit Name"
              autocapitalize="off"
              spellcheck={false}
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
