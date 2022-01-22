import styled from 'styled-components';

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
  className: 'checkbox',
})`
  width: 24px;
  height: 24px;
  border: 0;
  cursor: pointer;
  appearance: none;
  background: var(--secondary_04);
  transform: rotate(0);
  transition: box-shadow 0.4s, transform 0.5s;

  &:checked {
    transform: rotate(180deg);
    box-shadow: inset 0 0 0 20px var(--secondary_04);
    transition: all 0.8s;
  }
`;
