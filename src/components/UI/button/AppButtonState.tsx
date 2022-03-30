import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components/macro';

import { Button, ButtonProps } from './Button';
import { HabitFinalState } from '../../../helpers/constants';

interface AppButtonStateProps extends ButtonProps {
  $border?: string;
  $status: HabitFinalState | undefined;
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
    if ($status === HabitFinalState.Pending) return 'var(--semantic_02)';
    if ($status === HabitFinalState.Successful) return 'var(--semantic_03)';
    if ($status === HabitFinalState.Failed) return 'var(--semantic_04)';
    if ($status === HabitFinalState.Postponed) return 'var(--semantic_05)';
  }};

  &:disabled {
    opacity: 0.7;
    filter: saturate(70%);
  }

  &:active {
    box-shadow: none;
  }

  &:hover {
    outline: 1px solid var(--accent_06);
  }
`;
