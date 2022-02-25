import { useCallback } from 'react';
import { FormikValues } from 'formik';
import * as Yup from 'yup';

import { Container, PageLayout } from '../components/layout';
import { Header } from '../components/UI/Header';
import { Toolbar } from '../components/layout/Toolbar';
import {
  AppForm,
  AppFormCheckbox,
  AppFormInputDate,
  AppFormInputText,
  AppFormSubmit,
} from '../components/form';
import { ReactComponent as RepeatSVG } from '../assets/icons/icon-repeat_24dp.svg';
import { ReactComponent as EventSVG } from '../assets/icons/icon-event_24dp.svg';
import { ReactComponent as CalculateSVG } from '../assets/icons/icon-calculate_24dp.svg';
import { ReactComponent as SegmentSVG } from '../assets/icons/icon-segment_24dp.svg';
import {
  HeadingExtraSmall,
  HeadingLarge,
  NavLinkIcon,
} from '../components/UI/Typography';
import { useAPI } from '../hooks/useApi';
import { habitAPI } from '../services/habit';
import { Modal } from '../components/UI/Modal';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { successStatus } from '../utility/request/statuses';
import { TargetType } from '../helpers/constants';
import { HabitCollected } from '../helpers/globalTypes';

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

export const initialValuesCreate: HabitCollected = {
  habitType: '',
  habitName: '',
  targetType: '',
  targetValue: null,
  targetCurrent: null,
  targetUnit: '',
  expirationDate: null,
};

export const Create = (): JSX.Element => {
  const { request, status, setStatus, message, setMessage } = useAPI(
    habitAPI.createHabit,
  );

  const submitFormHandler = useCallback(
    async (habitValues: FormikValues) => {
      request(habitValues);
    },
    [request],
  );

  return (
    <PageLayout>
      <Modal
        showModal={status !== null && !!message}
        modalCallback={() => {
          setStatus(null);
          setMessage('');
        }}
        status={status}
        modalMessage={message}
        navigateTo="/"
        conditionToNavigate={successStatus(status)}
      />
      <Toolbar>
        <NavLinkIcon
          to="/"
          aria-label="navigation link to homepage"
          $ml={{ de: 'auto' }}
          $iconSdw
        >
          <HomeSVG />
        </NavLinkIcon>
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
              <AppFormSubmit
                $variant="flat"
                $size="medium"
                $labelShadow
                title="Create"
                aria-label="create habit"
                $flxAs={{ de: 'flex-end' }}
                $mt={{ de: '8px' }}
                $bold
              >
                Create
              </AppFormSubmit>
            </>
          )}
        </AppForm>
      </Container>
    </PageLayout>
  );
};
