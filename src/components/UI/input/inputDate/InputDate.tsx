import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  selected: Date | null;
  onBlur?: () => void;
  onChange: (val: any) => void;
}

const Styles = styled.div.attrs(props => ({
  className: props.className || 'datepicker-restyle-wrapper',
}))`
  .react-datepicker-wrapper {
    color: var(--neutral_14);

    .react-datepicker__input-container {
      input {
        min-width: 60px;
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
    />
  </Styles>
);
