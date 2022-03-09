import {
  forwardRef,
  ForwardedRef,
  ComponentPropsWithoutRef,
  ReactNode,
} from 'react';
import styled, { keyframes, css } from 'styled-components/macro';

import { Container, ContainerProps } from '../layout';

interface BackdropAnimatedProps {
  $animated?: boolean;
}

interface BackdropProps extends ContainerProps, BackdropAnimatedProps {
  isOpen: boolean;
  setIsOpen?: () => void;
  children?: ReactNode;
}

const backdropEnter = keyframes`
  0% {
    opacity: 0;
    pointer-events: none;
  }

  99% {
    pointer-events: none;
  }

  100% {
    opacity: 1;
    pointer-events: auto;
  }
`;

const backdropExit = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const AnimatedCSS = css`
  &.appear-active,
  &.enter-active,
  &.enter-done {
    animation-name: ${backdropEnter};
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }

  &.exit-active {
    animation-name: ${backdropExit};
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }
`;

export const BackdropStyled = styled(Container).attrs<
  ComponentPropsWithoutRef<'button'>
>(props => ({
  role: props.role || 'button',
  tabIndex: props.tabIndex || 0,
  className: ['backdrop', props.className].join(' '),
}))<BackdropAnimatedProps>`
  background-color: var(--neutral_10_op05);
  border: 2px solid var(--neutral_08);

  ${({ $animated }) => $animated && AnimatedCSS};
`;

export const Backdrop = forwardRef(
  (
    { isOpen, setIsOpen, children, ...otherProps }: BackdropProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element | null => {
    if (isOpen) {
      return (
        <BackdropStyled
          onClick={setIsOpen}
          onKeyDown={event =>
            event.key === 'Escape' && setIsOpen && setIsOpen()
          }
          {...otherProps}
          ref={ref}
        >
          {children}
        </BackdropStyled>
      );
    }
    return null;
  },
);
