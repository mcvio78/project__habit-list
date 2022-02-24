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
    if ($status === FinalState.Pending) return 'var(--semantic_02)';
    if ($status === FinalState.Successful) return 'var(--semantic_03)';
    if ($status === FinalState.Failed) return 'var(--semantic_04)';
    if ($status === FinalState.Postponed) return 'var(--semantic_05)';
  }};

  &:disabled {
    opacity: 1;
    filter: saturate(100%);
  }
`;
