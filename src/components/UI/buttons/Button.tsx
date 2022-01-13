import { MouseEvent } from 'react';
import styled from 'styled-components/macro';

import {
  styledMargin,
  StyledMarginProps,
} from '../../../utility/UI/styledMargin';

export interface ButtonProps extends StyledMarginProps {
  /** title attribute - required */
  title: string;
  /** aria-label attribute - required */
  'aria-label': string;
  /** type attribute */
  type?: 'button' | 'submit' | 'reset' | undefined;
  /** handle onClick functions */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** background-color CSS property (prop) */
  $bkgCol?: string;
  /** box-shadow CSS property (prop) */
  $boxSdw?: boolean;
  /** button label shadow */
  $lblSdw?: boolean;
  /** button label bold */
  $lblB?: boolean;
  /** button label italic */
  $lblIt?: boolean;
}

export const Button = styled.button.attrs(props => ({
  type: props.type || 'button',
}))<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bkgCol }) =>
    `${$bkgCol} !important` || 'var(--secondary_01)'};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: none;
  box-shadow: ${({ $boxSdw }) =>
    $boxSdw ? '0 4px 4px var(--neutral_05_op025)' : 'none'};
  text-shadow: ${({ $lblSdw }) =>
    $lblSdw && '0 4px 4px rgba(--neutral_05-s025)'};
  font-variation-settings: ${({ $lblB }) => $lblB && "'wght' 700"};
  font-weight: ${({ $lblB }) => $lblB && 700};
  font-style: ${({ $lblIt }) => $lblIt && 'italic'};

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
    user-select: none;
    cursor: not-allowed;
  }

  &:active {
    box-shadow: ${({ $boxSdw }) =>
      $boxSdw ? '0 1px 1px var(--neutral_05_op025)' : 'none'};
  }

  ${styledMargin};
`;
