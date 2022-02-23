import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { Container, PageLayout } from '../../components/layout';
import { NavLinkIcon } from '../../components/UI/Typography';
import { Header } from '../../components/UI/Header';
import { Toolbar } from '../../components/layout/Toolbar';
import { ReactComponent as HomeSVG } from '../../assets/icons/icon-home_24dp.svg';
import { ShowDailyItem } from './ShowDailyItem';
import { DateSelector } from './DateSelector';
import { useAPI } from '../../hooks/useApi';
import { habitAPI } from '../../services/habit';
import { Modal } from '../../components/UI/Modal';
import { errorStatus } from '../../utility/request/statuses';

const DailyListContainer = styled(Container)`
  overflow-y: auto;
`;

export const Daily = (): JSX.Element => {
  const [date, setDate] = useState<Date>(new Date());
  const { request, data, status, setStatus, message, setMessage } = useAPI(
    habitAPI.getDailyHabits,
  );

  const selectDateHandler = useCallback(
    (days: number) => {
      const daySelected = new Date(date.setDate(date.getDate() + days));
      setDate(() => daySelected);
    },
    [date],
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

  const dailyHabits = data
    ? data.map((day: any) => (
        <ShowDailyItem
          key={day._id}
          habitName={day.habitName}
          habitType={day.habitType}
          targetValue={day.targetValue}
          targetCurrent={day.targetCurrent}
          habitState={day.state}
          expirationDate={day.expirationDate}
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
      <DateSelector
        date={date}
        onClickHandler={selectDateHandler}
        averageStatus={0}
      />
      <DailyListContainer
        $w={{ de: '100%' }}
        $fd={{ de: 'column' }}
        $mxh={{ de: '280px' }}
      >
        {dailyHabits}
      </DailyListContainer>
    </PageLayout>
  );
};
