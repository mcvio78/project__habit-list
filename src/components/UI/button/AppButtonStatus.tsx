import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components/macro';

import { Button, ButtonProps } from './Button';

interface AppButtonStatusProps extends ButtonProps {
  $border: string;
}

export const AppButtonStatus = styled(Button).attrs<
  ComponentPropsWithoutRef<'button'>
>(props => ({
  className: props.className || 'status-button',
}))<AppButtonStatusProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${({ $border }) => $border};
`;
