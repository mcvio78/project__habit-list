import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components/macro';

import { Button, ButtonProps } from './Button';
import { FinalState } from '../../../helpers/constants';

interface AppButtonStatusProps extends ButtonProps {
  $border?: string;
  $status: FinalState | undefined;
}

export const AppButtonStatus = styled(Button).attrs<
  ComponentPropsWithoutRef<'button'>
>(props => ({
  className: ['button-habit-status', props.className].join(' '),
}))<AppButtonStatusProps>`
  width: var(--btn-hab-stat-w);
  height: var(--btn-hab-stat-h);
  box-sizing: border-box;
  border-radius: 50%;
  border: ${({ $border }) => $border};
  flex-shrink: 0;
  background-color: ${({ $status }) => {
    if ($status === FinalState.Pending) return 'grey';
    if (
      $status === FinalState.SuccessfulActive ||
      $status === FinalState.SuccessfulExpired
    )
      return 'green';
    if (
      $status === FinalState.FailedActive ||
      $status === FinalState.FailedExpired
    )
      return 'red';
    if (
      $status === FinalState.PostponedActive ||
      $status === FinalState.PostponedExpired
    )
      return 'blue';
  }};

  &:disabled {
    opacity: 1;
    filter: saturate(100%);
  }
`;
