import { forwardRef, ForwardedRef, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components/macro';
import { CSSTransition } from 'react-transition-group';

import { Container } from '../layout';
import { AppButtonHamburger } from './buttons';
import { NavigationItems } from './navigation';

interface SideDrawerProps {
  isOpen: boolean;
  setIsOpen: () => void;
  $animated?: boolean;
}

interface SideDrawerAnimatedProps {
  $animated?: boolean;
}

const SideDrawerEnter = keyframes`
  0% {
    height: 0;
    width: 0;
    opacity: 0;
  }

  100% {
    height: 100%;
    width: 100%;
    opacity: 1;
  }
`;

const SideDrawerExit = keyframes`
  0% {
    height: 100%;
    width: 100%;
    opacity: 1;
  }

  100% {
    height: 0;
    width: 0;
    opacity: 0;
  }
`;

export const AnimatedCSS = css`
  &.appear-active,
  &.enter-active,
  &.enter-done {
    animation-name: ${SideDrawerEnter};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

  &.exit-active {
    animation-name: ${SideDrawerExit};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
`;

const SideDrawerStyled = styled(Container)<SideDrawerAnimatedProps>`
  border-radius: 10px;
  background-color: var(--primary_01);
  box-sizing: border-box;

  ${({ $animated }) => $animated && AnimatedCSS}
`;

export const SideDrawer = forwardRef(
  (
    { isOpen, setIsOpen, $animated }: SideDrawerProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const AppButtonHamburgerCloseRef = useRef<HTMLButtonElement>(null);
    const NavigationItemsRef = useRef<HTMLInputElement>(null);

    return (
      <SideDrawerStyled
        $pos={{ de: 'absolute' }}
        $top={{ de: 0 }}
        $rt={{ de: 0 }}
        $zi={{ de: 200 }}
        $mxw={{ de: '100%', xs: '70%' }}
        $p={{ de: '0 16px' }}
        $fd={{ de: 'column' }}
        $ai={{ de: 'center' }}
        $animated={$animated}
        ref={ref}
      >
        <CSSTransition
          in={isOpen}
          timeout={{ enter: 3000, exit: 3000 }}
          mountOnEnter
          unmountOnExit
          appear
          nodeRef={AppButtonHamburgerCloseRef}
        >
          <AppButtonHamburger
            title="close sidebar button"
            aria-label="close side drawer menu button"
            isOpen={isOpen}
            onClick={setIsOpen}
            $flxAs={{ de: 'flex-end' }}
            $mt={{ de: '30px' }}
            $animated
            ref={AppButtonHamburgerCloseRef}
            id="hide-side-driver-btn"
          />
        </CSSTransition>
        <CSSTransition
          in={isOpen}
          timeout={{ enter: 3000, exit: 3000 }}
          mountOnEnter
          unmountOnExit
          appear
          nodeRef={NavigationItemsRef}
        >
          <NavigationItems $animated ref={NavigationItemsRef} />
        </CSSTransition>
      </SideDrawerStyled>
    );
  },
);
