import styled from 'styled-components/macro';

import { spacer, SpacerProps } from '../../utility/spacer';

export interface BasicButtonProps extends SpacerProps {
  title: string;
  'aria-label': string;
  id?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  name?: string;
  value?: string | number;
  text?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  bkgCol?: string;
  boxSdw?: boolean;
}

export const ButtonBasic = styled.button.attrs(props => ({
  type: props.type || 'button',
}))<BasicButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ bkgCol }) => bkgCol || 'var(--clr-se-v01)'};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  box-shadow: ${({ boxSdw }) =>
    boxSdw ? ` 0 4px 4px rgba(var(--clr-nt-v02-rgb), 0.25)` : 'none'};
  ${spacer};
`;
