import { useState, useCallback } from 'react';
import styled from 'styled-components/macro';

import { ButtonHamburger } from './buttons';
import { Container, DynamicWrapper } from '../layout';
import { Backdrop } from './Backdrop';

const SideDrawerMenu = styled(Container)`
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 10px;
  z-index: 200;
  background-color: var(--clr-ac-v04-a);
  transition: transform 0.3s ease-out;
`;

export const SideDrawer = () => {
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
      <ButtonHamburger
        aria-label="close side drawer menu button"
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <DynamicWrapper keyEvt="keydown" callback={onKeyDownHandler}>
          <Backdrop $isOpen={isOpen} $setIsOpen={() => setIsOpen(false)} />

          {isOpen && (
            <SideDrawerMenu
              $mxw={{ de: '70%' }}
              $miw={{ de: '50%' }}
              $h={{ de: '100%' }}
              $p={{ de: '0 16px' }}
              $fd={{ de: 'column' }}
              $ai={{ de: 'center' }}
            />
          )}
        </DynamicWrapper>
      )}
    </>
  );
};
