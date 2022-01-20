import { forwardRef, ForwardedRef } from 'react';
import styled, { keyframes, css } from 'styled-components/macro';

interface BackdropAnimatedProps {
  $animated?: boolean;
}

interface BackdropProps extends BackdropAnimatedProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const BackdropAnimationOpen = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const BackdropAnimationClose = keyframes`
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
    animation-name: ${BackdropAnimationOpen};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

  &.exit-active {
    animation-name: ${BackdropAnimationClose};
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }
`;

export const BackdropStyled = styled.div.attrs(props => ({
  role: props.role || 'button',
  tabIndex: props.tabIndex || 0,
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
          onKeyDown={event => event.key === 'Escape' && setIsOpen()}
          $animated={$animated}
          ref={ref}
        />
      );
    }
    return null;
  },
);
