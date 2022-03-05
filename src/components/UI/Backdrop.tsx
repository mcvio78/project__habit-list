import { forwardRef, ForwardedRef, ComponentPropsWithoutRef } from 'react';
import styled, { keyframes, css } from 'styled-components/macro';

interface BackdropAnimatedProps {
  $animated?: boolean;
}

interface BackdropProps extends BackdropAnimatedProps {
  isOpen: boolean;
  setIsOpen?: () => void;
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

export const BackdropStyled = styled.div.attrs<
  ComponentPropsWithoutRef<'button'>
>(props => ({
  role: props.role || 'button',
  tabIndex: props.tabIndex || 0,
  className: ['checkbox', props.className].join(' '),
}))<BackdropAnimatedProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: var(--neutral_10_op05);

  ${({ $animated }) => $animated && AnimatedCSS}
`;

export const Backdrop = forwardRef(
  (
    { isOpen, setIsOpen, $animated }: BackdropProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element | null => {
    if (isOpen) {
      return (
        <BackdropStyled
          onClick={setIsOpen}
          onKeyDown={event =>
            event.key === 'Escape' && setIsOpen && setIsOpen()
          }
          $animated={$animated}
          ref={ref}
        />
      );
    }
    return null;
  },
);
