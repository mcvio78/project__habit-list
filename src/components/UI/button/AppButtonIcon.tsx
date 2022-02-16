import styled from 'styled-components/macro';
import { ComponentPropsWithoutRef } from 'react';

import { Button } from './Button';

interface AppButtonIconProps {
  $iconSdw?: boolean;
}

export const AppButtonIcon = styled(Button).attrs<
  ComponentPropsWithoutRef<'button'>
>(props => ({
  className: ['icon-button', props.className].join(' '),
  role: props.role || 'button',
}))<AppButtonIconProps>`
  width: 24px;
  height: 24px;
  padding: 2px;
  flex-shrink: 0;
  background-color: transparent;
  outline: var(--neutral_06) 2px solid;

  svg {
    fill: var(--neutral_07);
    filter: ${({ $iconSdw }) =>
      $iconSdw && `drop-shadow(0 4px 4px var(--neutral_10_op05))`};
    width: 100%;
    height: 100%;
  }
`;
