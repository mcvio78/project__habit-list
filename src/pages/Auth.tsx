import { useState } from 'react';
import * as Yup from 'yup';

import { PageLayout, Container } from '../components/layout';
import { NavLinkIcon, ParagraphSmall } from '../components/Typography';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { Header } from '../components/Header';
import { ReactComponent as EmailSVG } from '../assets/icons/icon-email_24dp.svg';
import { ReactComponent as PasswordSVG } from '../assets/icons/icon-lock_24dp.svg';
import { AppButton } from '../components/UI/buttons';
import { AppFormField, AppFormSubmit, AppForm } from '../components/form';
import { authAPI } from '../services/auth';

const shapeLogin = {
  email: Yup.string().required('Email is required').email().label('Email'),
  password: Yup.string()
    .required('Password is required')
    .min(8)
    .label('Password'),
};
const shapeRegister = {
  ...shapeLogin,
  passwordConfirmation: Yup.string()
    .required('Confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
};

const validationSchemaLogin = Yup.object().shape(shapeLogin);
const validationSchemaRegister = Yup.object().shape(shapeRegister);

const initialValuesLogin = {
  email: '',
  password: '',
};
const initialValuesRegister = {
  ...initialValuesLogin,
  passwordConfirmation: '',
};

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
        $mxw={{ de: '280px' }}
        $fg={{ de: 1 }}
        $fd={{ de: 'column' }}
        $jc={{ de: 'center' }}
        $g={{ de: '20px' }}
      >
        <AppForm
          enableReinitialize
          initialValues={isSignUp ? initialValuesRegister : initialValuesLogin}
          onSubmit={values => {
            authAPI.login(values.email, values.password);
          }}
          validationSchema={
            isSignUp ? validationSchemaRegister : validationSchemaLogin
          }
        >
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
            {isSignUp && (
              <AppFormField
                IconSVG={PasswordSVG}
                $label="Password Confirmation"
                id="password-confirmation"
                type="password"
                name="passwordConfirmation"
                placeholder="Repeat password"
                autocapitalize="off"
                spellcheck={false}
              />
            )}
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
        </AppForm>
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
