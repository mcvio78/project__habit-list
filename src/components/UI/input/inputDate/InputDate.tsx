import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export interface InputDateProps extends ComponentPropsWithoutRef<'input'> {
  selected: Date | null;
  onChange: (val: any) => void;
}

const Styles = styled.div.attrs(props => ({
  className: props.className || 'datepicker-restyle-wrapper',
}))`
  .react-datepicker-wrapper {
    color: var(--neutral_14);

    .react-datepicker__input-container {
      input {
        min-width: 40px;
        width: 100% !important;
        min-height: 28px;
        padding: 0 5px;
        border: none;
        flex: 1 0;
        font-style: inherit;
        font-variation-settings: 'wght' 500;
        font-weight: 500;
        line-height: 0;
        background-color: transparent;
        outline: none;
        text-align: center;
        color: var(--neutral_08);
      }
    }
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
`;

export const InputDate = ({
  id,
  selected,
  onChange,
  onBlur,
  placeholder,
}: InputDateProps): JSX.Element => (
  <Styles>
    <DatePicker
      id={id}
      selected={selected}
      onChange={onChange}
      onBlur={onBlur}
      placeholderText={placeholder}
      onChangeRaw={e => e.preventDefault()}
      minDate={new Date()}
      dateFormat="yyyy-MM-dd"
      formatWeekDay={nameOfDay => nameOfDay.substr(0, 3)}
    />
  </Styles>
);
