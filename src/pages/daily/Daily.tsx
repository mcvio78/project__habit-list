import { useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';

import { PageLayout } from '../../components/layout';
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
    const dateDaySearched = format(date, "yyyy-MM-dd'T'00:00:00.000+00:00");
    request(dateDaySearched);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const dailyHabits = data
    ? data.map((day: any) => (
        <ShowDailyItem
          key={day._id}
          habitName={day.habitName}
          habitTarget={day.targetAmount}
          habitCurrentAmount="miss current"
          habitStatusButton={100}
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
      {dailyHabits}
    </PageLayout>
  );
};
