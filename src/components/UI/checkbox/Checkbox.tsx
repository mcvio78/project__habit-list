import styled from 'styled-components/macro';

import {
  styledMargin,
  StyledMarginProps,
} from '../../../utility/UI/styledMargin';

export const Checkbox = styled.input.attrs(props => ({
  type: 'checkbox',
  className: props.className || 'checkbox',
}))<StyledMarginProps>`
  width: var(--cbox-w);
  height: var(--cbox-h);
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
  ${styledMargin}
`;
