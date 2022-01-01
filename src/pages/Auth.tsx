import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { PageLayout, Container } from '../components/layout';
import { NavLinkIcon, ParagraphSmall } from '../components/Typography';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { Header } from '../components/Header';
import { ReactComponent as EmailSVG } from '../assets/icons/icon-email_24dp.svg';
import { ReactComponent as PasswordSVG } from '../assets/icons/icon-lock_24dp.svg';
import { AppButton } from '../components/UI/buttons';
import { AppFormField, AppFormSubmit } from '../components/form';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
});

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
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={() => {}}
          validationSchema={validationSchema}
        >
          {() => (
            <>
              <AppFormField
                IconSVG={EmailSVG}
                $label="Email"
                id="email"
                type="email"
                name="email"
                placeholder="Email here"
                autocapitalize="off"
                spellcheck={false}
              />
              <AppFormField
                IconSVG={PasswordSVG}
                $label="Password"
                id="password"
                type="password"
                name="password"
                placeholder="Password here"
                autocapitalize="off"
                spellcheck={false}
              />
              <AppFormSubmit
                $hb
                $md
                $lblSdw
                $lblB
                title={isSignUp ? 'Sign Up' : 'Log In'}
                aria-label={isSignUp ? 'Sign Up Button' : 'Log In Button'}
                $flxAs={{ de: 'flex-end' }}
              >
                {isSignUp ? 'Sign Up' : 'Log In'}
              </AppFormSubmit>
            </>
          )}
        </Formik>
        <Container $fd={{ de: 'column' }} $g={{ de: '8px' }}>
          <ParagraphSmall>
            {isSignUp
              ? 'Do you already have an account?'
              : 'Create a new account'}
          </ParagraphSmall>
          <AppButton
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
          </AppButton>
        </Container>
      </Container>
    </PageLayout>
  );
};
