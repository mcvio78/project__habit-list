import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components/macro';

import {
  styledMargin,
  StyledMarginProps,
} from '../../../utility/UI/styledMargin';

export interface ButtonProps
  extends ComponentPropsWithoutRef<'button'>,
    StyledMarginProps {
  $backgroundColor?: string;
  $boxShadow?: boolean;
  $labelShadow?: boolean;
  $ital?: boolean;
  $bold?: boolean;
}

export const Button = styled.button.attrs(props => ({
  className: props.className || 'button',
  type: props.type || 'button',
}))<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ $backgroundColor }) =>
    `${$backgroundColor} !important` || 'var(--secondary_01)'};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: none;
  box-shadow: ${({ $boxShadow }) =>
    $boxShadow ? '0 4px 4px var(--neutral_05_op025)' : 'none'};
  text-shadow: ${({ $labelShadow }) =>
    $labelShadow && '0 4px 4px rgba(--neutral_05-s025)'};
  font-style: ${({ $ital }) => $ital && 'italic'};
  font-variation-settings: ${({ $bold }) => $bold && `'wght' 700`};
  font-weight: ${({ $bold }) => $bold && 700};

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
    user-select: none;
    cursor: not-allowed;
  }

  &:active {
    box-shadow: ${({ $boxShadow }) =>
      $boxShadow ? '0 1px 1px var(--neutral_05_op025)' : 'none'};
  }

  ${styledMargin};
`;
