import { useState } from 'react';

import { PageLayout, Container } from '../components/layout';
import { NavLinkIcon, ParagraphSmall } from '../components/Typography';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { Header } from '../components/Header';
import { Input } from '../components/UI/Input/Input';
import { ReactComponent as EmailSVG } from '../assets/icons/icon-email_24dp.svg';
import { ReactComponent as PasswordSVG } from '../assets/icons/icon-lock_24dp.svg';
import { Button } from '../components/UI/buttons';

export const Auth = (): JSX.Element => {
  const [isSignUp, setIsSignUp] = useState(true);

  const switchLogHandler = () => {
    setIsSignUp(prevState => !prevState);
  };

  return (
    <PageLayout>
      <Container
        $w={{ de: '100%' }}
        $mih={{ de: '40px' }}
        $jc={{ de: 'flex-end' }}
        $ai={{ de: 'center' }}
      >
        <NavLinkIcon to="/" $iconSdw>
          <HomeSVG />
        </NavLinkIcon>
      </Container>
      <Header $header="Account" $subHeader={isSignUp ? 'Register' : 'Log In'} />
      <Container
        $fg={{ de: 1 }}
        $fd={{ de: 'column' }}
        $jc={{ de: 'center' }}
        $g={{ de: '20px' }}
      >
        <Input
          type="email"
          name="email"
          id="email"
          IconSVG={EmailSVG}
          placeholder="Email here"
          $label="Email"
        />
        <Input
          type="password"
          name="password"
          id="password"
          IconSVG={PasswordSVG}
          placeholder="Password here"
          $label="Password"
        />
        <Button
          $hb
          $md
          $lblSdw
          $lblB
          title="Sign in"
          aria-label="Sign in button"
          $flxAs={{ de: 'flex-end' }}
        >
          {isSignUp ? 'Sign Up' : 'Log In'}
        </Button>
        <Container $fd={{ de: 'column' }} $g={{ de: '8px' }}>
          <ParagraphSmall>
            {isSignUp
              ? 'Do you already have an account?'
              : 'Create a new account'}
          </ParagraphSmall>
          <Button
            $hb
            $md
            $lblSdw
            $lblB
            title="Sign in"
            aria-label="Sign in button"
            $flxAs={{ de: 'center' }}
            onClick={switchLogHandler}
          >
            Click here
          </Button>
        </Container>
      </Container>
    </PageLayout>
  );
};
