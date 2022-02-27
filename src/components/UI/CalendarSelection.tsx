import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export interface CalendarSelectionProps
  extends ComponentPropsWithoutRef<'input'> {
  date: Date;
  onChange: (val: any) => void;
  toggleCalendarStatus: () => void;
}

const Styles = styled.div.attrs(props => ({
  className: props.className || 'datepicker-calendar-wrapper',
}))`
  .react-datepicker-wrapper,
  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker-popper {
    position: relative !important;
    transform: inherit !important;
    padding: 0;
  }

  .react-datepicker,
  .react-datepicker__header {
    font-family: inherit;
    border: none;
    background-color: var(--secondary_01);
  }

  .react-datepicker__month-container {
    box-shadow: 0 4px 20px var(--neutral_10_op05);
    border-radius: 4px;
  }

  .react-datepicker__day--weekend {
    color: var(--neutral_17);
  }

  .react-datepicker__day--outside-month {
    opacity: 0.3;
    pointer-events: none;
  }

  .react-datepicker__day--selected {
    background: var(--semantic_06) !important;
    border-radius: 0;
  }

  padding: 24px 36px;
  border-radius: 4px;
  background-color: white;
`;

export const CalendarSelection = ({
  date,
  onChange,
  toggleCalendarStatus,
}: CalendarSelectionProps): JSX.Element => (
  <Styles>
    <DatePicker
      selected={date}
      onChange={data => {
        onChange(data);
        toggleCalendarStatus();
      }}
      onChangeRaw={e => e.preventDefault()}
      openToDate={date}
      open
      formatWeekDay={nameOfDay => nameOfDay.substr(0, 3)}
    />
  </Styles>
);
