import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import styled, { css, keyframes } from 'styled-components/macro';

import { Button, ButtonProps } from './Button';

interface AppButtonHamburgerContainerProps extends ButtonProps {
  /** open button state (prop) */
  isOpen: boolean;
  /** animate with transition group */
  $animated?: boolean;
}

const AppButtonHamburgerAnimationOpen = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
`;

const AppButtonHamburgerAnimationClose = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
`;

const AnimatedCSS = css`
  &.appear-active,
  &.enter-active,
  &.enter-done {
    animation-name: ${AppButtonHamburgerAnimationOpen};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

  &.exit-active {
    animation-name: ${AppButtonHamburgerAnimationClose};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
`;

export const AppButtonHamburgerContainer = styled(Button).attrs({
  className: 'hamburger-button',
  role: 'button',
})<AppButtonHamburgerContainerProps>`
  width: 36px;
  height: 26px;
  flex-shrink: 0;
  justify-content: space-between;
  box-shadow: none;
  background-color: transparent;
  outline: var(--neutral_06) 2px solid;

  ${({ $animated }) => $animated && AnimatedCSS}

  div {
    width: 100%;
    height: 4px;
    background-color: var(--secondary_01);
    box-shadow: ${({ isOpen }) =>
      !isOpen && `0 4px 4px var(--neutral_05_op025)`};
    transition: all 0.5s linear;

    :first-child {
      transform: ${({ isOpen }) =>
        isOpen ? 'translateY(11px) rotate(45deg) ' : 'rotate(0) translateY(0)'};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen
          ? 'translateY(-11px) rotate(-45deg) '
          : 'rotate(0) translateY(0)'};
    }
  }
`;

export const AppButtonHamburger = forwardRef(
  (
    props: PropsWithChildren<any>,
    ref: ForwardedRef<HTMLButtonElement>,
  ): JSX.Element => (
    <AppButtonHamburgerContainer {...props} ref={ref}>
      <div />
      <div />
      <div />
    </AppButtonHamburgerContainer>
  ),
);
