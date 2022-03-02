import { useCallback, useContext, useState, useEffect } from 'react';
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
import { useAPI } from '../../hooks/useApi';
import { habitAPI } from '../../services/habit';
import { Modal } from '../../components/UI/Modal';
import { errorStatus } from '../../utility/request/statuses';
import { HabitWithFinalState } from '../../helpers/globalTypes';
import {
  addHabitFinalState,
  calculateResults,
  dateToUTC,
} from '../../utility/utils';
import { AppButton } from '../../components/UI/button';
import { useToggle } from '../../hooks/useToggle';
import { CalendarSelection } from '../../components/UI/CalendarSelection';
import { AuthContext, Results } from '../../auth/context';

const DailyListContainer = styled(Container)`
  overflow-y: auto;
`;

export const Daily = (): JSX.Element => {
  const { dailyState, resultsState } = useContext(AuthContext);
  const [daily, setDaily] = dailyState;
  const [results, setResults] = resultsState;
  const [date, setDate] = useState<Date>(new Date());
  const navigate = useNavigate();
  const { request, status, setStatus, message, setMessage } = useAPI(
    habitAPI.getDailyHabits,
  );
  const { status: calendarStatus, toggleStatus: toggleCalendarStatus } =
    useToggle();

  const setDailyCB = useCallback(
    dailyHabitsFinalState => {
      setDaily(dailyHabitsFinalState);
    },
    [setDaily],
  );

  const setResultsCB = useCallback(
    globalResultsState => {
      setResults(globalResultsState);
    },
    [setResults],
  );

  const setNewDate = async () => {
    const dateUTC = dateToUTC(date);
    const response = await request(dateUTC);
    const dailyHabitsFinalState = addHabitFinalState(response?.data);
    setDailyCB(dailyHabitsFinalState);
    const currentDailyResults = calculateResults(dailyHabitsFinalState);
    setResultsCB((prevState: Results) => ({
      ...prevState,
      dailyResult: { ...currentDailyResults },
    }));
  };

  useEffect(() => {
    setNewDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const selectDateHandler = useCallback(
    (days: number) => {
      const daySelected = new Date(date.setDate(date.getDate() + days));
      setDate(() => daySelected);
    },
    [date],
  );

  const dailyHabits = daily
    ? daily.map((habit: HabitWithFinalState) => (
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
            date={date}
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
            date={date}
            onChange={setDate}
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
