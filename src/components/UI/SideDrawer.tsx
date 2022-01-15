import { useState, useCallback } from 'react';
import styled from 'styled-components/macro';

import { AppButtonHamburger } from './buttons';
import { Container } from '../layout';
import { DynamicWrapper } from '../../utility/events/DynamicWrapper';
import { Backdrop } from './Backdrop';
import { NavigationItems } from './navigation';

const SideDrawerMenu = styled(Container)`
  border-radius: 10px;
  background-color: var(--primary_01);
`;

export const SideDrawer = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onKeyDownHandler = useCallback((event: KeyboardEvent) => {
    if (event.defaultPrevented) {
      return;
    }

    if (event.key === 'Escape' || event.key === 'Esc' || event.key === '27') {
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      <AppButtonHamburger
        aria-label="close side drawer menu button"
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      <DynamicWrapper keyEvt="keydown" callback={onKeyDownHandler}>
        <Backdrop $isOpen={isOpen} $setIsOpen={() => setIsOpen(false)} />

        {isOpen && (
          <SideDrawerMenu
            $pos={{ de: 'absolute' }}
            $top={{ de: 0 }}
            $rt={{ de: 0 }}
            $zi={{ de: 200 }}
            $mxw={{ de: '70%' }}
            $miw={{ de: '40%' }}
            $h={{ de: '100%' }}
            $p={{ de: '0 16px' }}
            $fd={{ de: 'column' }}
            $ai={{ de: 'center' }}
          >
            <AppButtonHamburger
              aria-label="close side drawer menu button"
              $isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              $flxAs={{ de: 'flex-end' }}
              $mt={{ de: '27px' }}
            />
            <NavigationItems />
          </SideDrawerMenu>
        )}
      </DynamicWrapper>
    </>
  );
};
