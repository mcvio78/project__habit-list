import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components/macro';

import { Button, ButtonProps } from './Button';
import { FinalState } from '../../../helpers/constants';

interface AppButtonStateProps extends ButtonProps {
  $border?: string;
  $status: FinalState | undefined;
}

export const AppButtonState = styled(Button).attrs<
  ComponentPropsWithoutRef<'button'>
>(props => ({
  className: ['button-habit-status', props.className].join(' '),
}))<AppButtonStateProps>`
  width: var(--btn-hab-stat-w);
  height: var(--btn-hab-stat-h);
  box-sizing: border-box;
  border-radius: 50%;
  border: ${({ $border }) => $border};
  flex-shrink: 0;
  background-color: ${({ $status }) => {
    if ($status === FinalState.Pending) return 'grey';
    if ($status === FinalState.Successful) return 'green';
    if ($status === FinalState.Failed) return 'red';
    if ($status === FinalState.Postponed) return 'blue';
  }};

  &:disabled {
    opacity: 1;
    filter: saturate(100%);
  }
`;
