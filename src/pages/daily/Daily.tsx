import { useCallback, useEffect, useState } from 'react';
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
import { HabitStored } from '../../helpers/globalTypes';
import { checkHabitState } from '../../utility/utils';
import { HabitFinalState } from '../../helpers/constants';
import { AppButton } from '../../components/UI/button';

const DailyListContainer = styled(Container)`
  overflow-y: auto;
`;

export const Daily = (): JSX.Element => {
  const [date, setDate] = useState<Date>(new Date());
  const navigate = useNavigate();
  const { request, data, status, setStatus, message, setMessage } = useAPI(
    habitAPI.getDailyHabits,
  );

  useEffect(() => {
    const dateDaySearched = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );
    request(dateDaySearched);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const selectDateHandler = useCallback(
    (days: number) => {
      const daySelected = new Date(date.setDate(date.getDate() + days));
      setDate(() => daySelected);
    },
    [date],
  );

  const habitStateAndValidity = useCallback(
    (habitStatus, expirationDate) =>
      checkHabitState({ habitStatus, expirationDate }),
    [],
  );

  let habitsCompleted = 0;

  const dailyHabits = data
    ? data.map((habit: HabitStored) => {
        const { habitFinalState, isHabitValid } = habitStateAndValidity(
          habit.habitStatus,
          habit.expirationDate,
        );

        if (
          habitFinalState === HabitFinalState.Successful ||
          HabitFinalState.Postponed
        ) {
          habitsCompleted++;
        }

        return (
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
            habitFinalState={habitFinalState}
            isHabitValid={isHabitValid}
          />
        );
      })
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
      <DateSelector
        date={date}
        onClickHandler={selectDateHandler}
        averageStatus={0}
      />
      <DailyListContainer
        $w={{ de: '100%' }}
        $fd={{ de: 'column' }}
        $h={{ de: '278px' }}
      >
        {dailyHabits}
      </DailyListContainer>
      <DailyPotential
        habitsCompleted={habitsCompleted}
        habitsAmount={data?.length}
      />
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
          onClick={() => {}}
        >
          Calendar
        </AppButton>
      </Container>
    </PageLayout>
  );
};
