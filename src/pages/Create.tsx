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

const validationSchemaHabit = Yup.object().shape({
  habitName: Yup.string().required('Habit name is required').label('HabitName'),
  startDate: Yup.date()
    .nullable()
    .required('Date is required')
    .label('StartDate'),
  habitType: Yup.string()
    .nullable()
    .required('Habit type is required')
    .label('HabitType'),
});

interface InitialValues {
  habitName: string | '';
  startDate: null | Date;
  habitType: boolean | null;
}

const initialValues: InitialValues = {
  habitName: '',
  startDate: null,
  habitType: null,
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
                role="group"
                aria-labelledby="checkbox-group"
              >
                <AppFormCheckbox
                  id="toDo"
                  labelText="ToDo"
                  name="habitType"
                  value="toDo"
                  showError={false}
                />
                <AppFormCheckbox
                  id="not-do"
                  labelText="Do Not"
                  name="habitType"
                  value="notToDo"
                />
              </Container>
              <Container
                $w={{ de: '50%' }}
                $fd={{ de: 'column' }}
                $g={{ de: '12px' }}
              >
                <AppFormCheckbox
                  id="do-min"
                  labelText="Do Min"
                  name="habitAmount"
                  value="lessThan"
                />
                <AppFormCheckbox
                  id="do-max"
                  labelText="Do Max"
                  name="habitAmount"
                  value="moreThan"
                />
              </Container>
            </Container>
            <AppFormInputText
              type="text"
              id="habit"
              name="habitName"
              IconSVG={RepeatSVG}
              $label="Habit"
              placeholder="Habit Name"
              autoCapitalize="off"
              spellCheck={false}
            />
            <AppFormInputText
              type="number"
              id="amount"
              name="amount"
              IconSVG={CalculateSVG}
              $label="Amount"
              placeholder="Amount"
              min="1"
            />
            <AppFormInputDate
              className="to-mare-vacca"
              type="date"
              id="start-date"
              name="startDate"
              IconSVG={EventSVG}
              $label="Select a Date"
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
