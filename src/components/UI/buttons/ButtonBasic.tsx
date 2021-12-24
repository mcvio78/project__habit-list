import { MouseEvent } from 'react';
import styled from 'styled-components/macro';

import { styledMargin, StyledMarginProps } from '../../../utility/styledMargin';

export interface ButtonBasicProps extends StyledMarginProps {
  /** title attribute - required */
  title: string;
  /** aria-label attribute - required */
  'aria-label': string;
  /** ID attribute */
  id?: string;
  /** type attribute */
  type?: 'button' | 'submit' | 'reset' | undefined;
  /** name attribute */
  name?: string;
  /** value attribute */
  value?: string | number;
  /** disable attribute */
  disabled?: boolean;
  /** autoFocus attribute */
  autoFocus?: boolean;
  /** background-color CSS property (prop) */
  $bkgCol?: string;
  /** box-shadow CSS property (prop) */
  $boxSdw?: boolean;
  /** handle onClick functions */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** button label shadow */
  $lblSdw?: boolean;
  /** button label bold */
  $lblB?: boolean;
  /** button label italic */
  $lblIt?: boolean;
}

export const ButtonBasic = styled.button.attrs(props => ({
  type: props.type || 'button',
  'aria-describedby': 'id-of-a-paragraph-explaining-why',
}))<ButtonBasicProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bkgCol }) => $bkgCol || 'var(--clr-se-v01)'};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  box-shadow: ${({ $boxSdw }) =>
    $boxSdw ? ` 0 4px 4px rgba(var(--clr-nt-v02-rgb), 0.25)` : 'none'};
  text-shadow: ${({ $lblSdw }) =>
    $lblSdw && '0 4px 4px rgba(var(--clr-nt-v02-rgb), 0.25)'};
  font-variation-settings: ${({ $lblB }) => $lblB && "'wght' 700"};
  font-weight: ${({ $lblB }) => $lblB && 700};
  font-style: ${({ $lblIt }) => $lblIt && 'italic'};

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
    user-select: none;
    cursor: not-allowed;
  }

  ${styledMargin};
`;
