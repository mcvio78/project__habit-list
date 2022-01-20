import { useState, useCallback, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { AppButtonHamburger } from '../buttons';
import { Backdrop } from '../Backdrop';
import { SideDrawer } from '../SideDrawer';
import { useKeyEvent } from '../../../hooks/useKeyEvent';

export const SideBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const AppButtonHamburgerRef = useRef<HTMLButtonElement>(null);
  const BackdropRef = useRef<HTMLInputElement>(null);
  const SideDrawerRef = useRef<HTMLInputElement>(null);

  const onKeyDownHandler = useCallback(event => {
    if (event.defaultPrevented) {
      return;
    }
    if (event.key === 'Escape' || event.key === 'Esc' || event.key === '27') {
      setIsOpen(false);
    }
  }, []);

  useKeyEvent(onKeyDownHandler, 'keydown');

  return (
    <>
      <CSSTransition
        in={!isOpen}
        timeout={{ enter: 2000, exit: 2000 }}
        mountOnEnter
        unmountOnExit
        nodeRef={AppButtonHamburgerRef}
      >
        <AppButtonHamburger
          aria-label="open side drawer menu button"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          $animated
          ref={AppButtonHamburgerRef}
        />
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={{ enter: 2000, exit: 3000 }}
        mountOnEnter
        unmountOnExit
        nodeRef={BackdropRef}
      >
        <Backdrop isOpen setIsOpen={() => setIsOpen(false)} ref={BackdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={{ enter: 3000, exit: 3000 }}
        mountOnEnter
        unmountOnExit
        nodeRef={SideDrawerRef}
      >
        <SideDrawer
          isOpen={isOpen}
          setIsOpen={() => setIsOpen(false)}
          $animated
          ref={SideDrawerRef}
        />
      </CSSTransition>
    </>
  );
};
