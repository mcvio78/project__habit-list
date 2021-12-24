import { useState, useCallback } from 'react';

import { Button, ButtonHamburger } from './buttons';
import { Container } from '../layout';
import { DynamicWrapper } from '../../utility/DynamicWrapper';
import { Backdrop } from './Backdrop';

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

      <DynamicWrapper keyEvt="keydown" callback={onKeyDownHandler}>
        <Backdrop $isOpen={isOpen} $setIsOpen={() => setIsOpen(false)} />

        {isOpen && (
          <Container
            $pos={{ de: 'absolute' }}
            $top={{ de: 0 }}
            $rt={{ de: 0 }}
            $br={{ de: '10px' }}
            $zi={{ de: 200 }}
            $bkc={{ de: 'var(--clr-pr-v01)' }}
            $mxw={{ de: '70%' }}
            $miw={{ de: '30%' }}
            $h={{ de: '100%' }}
            $p={{ de: '0 16px' }}
            $fd={{ de: 'column' }}
            $ai={{ de: 'center' }}
          >
            <ButtonHamburger
              aria-label="close side drawer menu button"
              $isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              $flxAs={{ de: 'flex-end' }}
              $mt={{ de: '27px' }}
            />
            <Container
              $fd={{ de: 'column' }}
              $g={{ de: '10px' }}
              $m={{ de: '20px 16px' }}
            >
              <Button
                $hb
                $md
                $lblSdw
                $lblB
                title="account section"
                aria-label="go to account section"
              >
                Account
              </Button>
              <Button
                $hb
                $md
                $lblSdw
                $lblB
                title="UI settings"
                aria-label="go to UI setting"
              >
                UI Style
              </Button>
            </Container>
          </Container>
        )}
      </DynamicWrapper>
    </>
  );
};
