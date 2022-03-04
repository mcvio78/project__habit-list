import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

import { Container, PageLayout } from '../../components/layout';
import { NavLinkIcon } from '../../components/UI/Typography';
import { Header } from '../../components/UI/Header';
import { Toolbar } from '../../components/layout/Toolbar';
import { ReactComponent as HomeSVG } from '../../assets/icons/icon-home_24dp.svg';
import { DailyItem } from './DailyItem';
import { DateSelector } from './DateSelector';
import { DailyPotential } from './DailyPotential';
import {
  useAPI,
  useToggle,
  useEffectSelective,
  useSelectedDate,
  useDaily,
  useResults,
  useLoadingCX,
} from '../../hooks/';
import { habitAPI } from '../../services/habit';
import { Modal } from '../../components/UI/Modal';
import { errorStatus } from '../../utility/request/statuses';
import { HabitWithFinalState } from '../../helpers/globalTypes';
import { dateToUTC } from '../../utility/utils';
import { AppButton } from '../../components/UI/button';
import { CalendarSelection } from '../../components/UI/CalendarSelection';
import { Dialog } from '../../components/UI/Dialog';

const DailyListContainer = styled(Container)`
  overflow-y: auto;
`;

export const Daily = (): JSX.Element => {
  const initialState = { openDialog: false, habitIndex: null };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'openDialog':
        return { openDialog: true, habitIndex: action.habitIndex };
      case 'closeDialog':
        return { openDialog: false, habitIndex: null };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loadingCX } = useLoadingCX();
  const { results } = useResults();
  const { daily, setDailyOutcomes } = useDaily();
  const { selectedDate, setSelectedDateCB } = useSelectedDate();
  const navigate = useNavigate();
  const { request, status, setStatus, message, setMessage } = useAPI(
    habitAPI.getDailyHabits,
  );
  const { status: calendarStatus, toggleStatus: toggleCalendarStatus } =
    useToggle();

  const setCurrentDateContext = async (unixDate?: number) => {
    const dateUTC = unixDate || dateToUTC(new Date());
    const response = await request(dateUTC);
    setSelectedDateCB(dateUTC);
    setDailyOutcomes(response?.data);
  };

  useEffectSelective(
    () => {
      if (!loadingCX && !selectedDate) setCurrentDateContext();
    },
    () => {
      if (selectedDate) setCurrentDateContext(selectedDate);
    },
    [selectedDate],
  );

  const selectDateHandler = (days: number) => {
    if (selectedDate) {
      const dateSelectedLocal = new Date(selectedDate);
      const daySelected = dateSelectedLocal.setDate(
        dateSelectedLocal.getDate() + days,
      );
      setSelectedDateCB(daySelected);
    }
  };

  const dailyHabits = daily
    ? daily.map((habit: HabitWithFinalState, index: number) => (
        <DailyItem
          key={habit._id}
          habitName={habit.habitName}
          habitType={habit.habitType}
          targetType={habit.targetType}
          targetValue={habit.targetValue}
          targetUnit={habit.targetUnit}
          targetCurrent={habit.targetCurrent}
          habitStatus={habit.habitStatus}
          expirationDate={habit.expirationDate}
          habitFinalState={habit.finalState}
          isHabitValid={habit.isValid}
          onClick={() => dispatch({ type: 'openDialog', habitIndex: index })}
        />
      ))
    : null;

  return (
    <PageLayout>
      <Modal
        showModal={errorStatus(status) && !!message}
        modalCallback={() => {
          setStatus(null);
          setMessage('');
        }}
        status={status}
        modalMessage={message}
      />
      <Dialog
        isOpen={state.openDialog}
        setOpenDialog={() => dispatch({ type: 'closeDialog' })}
        habitIndex={state.habitIndex}
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
      <Header $header="Daily Habits" />
      {!calendarStatus ? (
        <>
          <DateSelector
            date={selectedDate ? new Date(selectedDate) : new Date()}
            onClickHandler={selectDateHandler}
            results={results}
          />
          <DailyListContainer
            $w={{ de: '100%' }}
            $fd={{ de: 'column' }}
            $h={{ de: '278px' }}
          >
            {dailyHabits}
          </DailyListContainer>
          <DailyPotential results={results} />
          <Container $g={{ de: '24px' }} $p={{ de: '12px 0' }}>
            <AppButton
              $size="medium"
              $variant="flat"
              $bold
              aria-label="new habit"
              title="create new habit"
              onClick={() => navigate('/create')}
            >
              New
            </AppButton>
            <AppButton
              $size="medium"
              $variant="flat"
              aria-label="calendar"
              title="select date using the calendar"
              onClick={toggleCalendarStatus}
            >
              Calendar
            </AppButton>
          </Container>
        </>
      ) : (
        <Container
          $fd={{ de: 'column' }}
          $mt={{ de: '24px' }}
          $g={{ de: '12px' }}
          $ai={{ de: 'flex-end' }}
        >
          <CalendarSelection
            date={selectedDate ? new Date(selectedDate) : new Date()}
            onChange={date => setSelectedDateCB(date.getTime())}
            toggleCalendarStatus={toggleCalendarStatus}
          />
          <AppButton
            $size="medium"
            $variant="flat"
            aria-label="close calendar"
            title="close calendar selection date"
            onClick={toggleCalendarStatus}
          >
            Close
          </AppButton>
        </Container>
      )}
    </PageLayout>
  );
};
