import { ForwardedRef, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components/macro';

import { useAuth } from '../../../hooks/useAuth';
import { Container } from '../../layout';
import { NavigationItem } from './NavigationItem';

interface NavContainerAnimatedProps {
  $animated?: boolean;
}

interface NavContainerProps extends NavContainerAnimatedProps {}

const NavContainerAnimationOpen = keyframes`
  0% {
    opacity: 0;
  }

  75% {
    opacity: 0;
    transform: translateY(-50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const NavContainerAnimationClose = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }

  50% {
    opacity: 0;
    transform: translateY(-50%);
  }

  100% {
    opacity: 0;
  }
`;

export const AnimatedCSS = css`
  &.appear-active,
  &.appear-done,
  &.enter-active,
  &.enter-done {
    ul li {
      animation-name: ${NavContainerAnimationOpen};
      animation-duration: 4.5s;
      animation-fill-mode: forwards;
    }
  }

  &.exit-active {
    animation-name: ${NavContainerAnimationClose};
    animation-duration: 4.5s;
    animation-fill-mode: forwards;
  }
`;

const NavContainer = styled.nav<NavContainerAnimatedProps>`
  ${({ $animated }) => $animated && AnimatedCSS};
`;

export const NavigationItems = forwardRef(
  (
    { $animated }: NavContainerProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const { user } = useAuth();

    return (
      <NavContainer $animated={$animated} ref={ref}>
        <Container
          as="ul"
          $fd={{ de: 'column' }}
          $g={{ de: '10px' }}
          $m={{ de: '20px 16px' }}
          $ai={{ de: 'center' }}
          $jc={{ de: 'center' }}
          $pl={{ de: 0 }}
        >
          {user && (
            <NavigationItem link="/account" ariaLabel="user account">
              Account
            </NavigationItem>
          )}
          <NavigationItem link="/ui" ariaLabel="application style">
            UI Style
          </NavigationItem>
          <NavigationItem link="/settings" ariaLabel="application settings">
            Settings
          </NavigationItem>
        </Container>
      </NavContainer>
    );
  },
);
