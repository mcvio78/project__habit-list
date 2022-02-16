import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components/macro';

import { Button, ButtonProps } from './Button';

interface AppButtonStatusProps extends ButtonProps {
  $border?: string;
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
`;
