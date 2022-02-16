import { useState, useCallback } from 'react';
import * as Yup from 'yup';
import { FormikValues } from 'formik';

import { PageLayout, Container } from '../components/layout';
import { Header } from '../components/UI/Header';
import { AppButton } from '../components/UI/button';
import { NavLinkIcon, ParagraphSmall } from '../components/UI/Typography';
import { Modal } from '../components/UI/Modal';
import { Toolbar } from '../components/layout/Toolbar';
import { AppFormInputText, AppFormSubmit, AppForm } from '../components/form';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { ReactComponent as EmailSVG } from '../assets/icons/icon-email_24dp.svg';
import { ReactComponent as PasswordSVG } from '../assets/icons/icon-lock_24dp.svg';
import { ReactComponent as UserSVG } from '../assets/icons/icon-person_24dp.svg';
import { authAPI } from '../services/auth';
import { useAPI } from '../hooks/useApi';
import { useAuth } from '../hooks/useAuth';

const shapeLogin = {
  userName: Yup.string().required('First name is required').label('userName'),
  password: Yup.string()
    .required('Password is required')
    .min(8)
    .label('Password'),
};
const shapeRegister = {
  ...shapeLogin,
  email: Yup.string().required('Email is required').email().label('Email'),
  passwordConfirmation: Yup.string()
    .required('Confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
};

const validationSchemaLogin = Yup.object().shape(shapeLogin);
const validationSchemaRegister = Yup.object().shape(shapeRegister);

interface InitialValuesLogin {
  userName: string;
  password: string;
}
interface InitialValuesRegister extends InitialValuesLogin {
  email: string;
  passwordConfirmation: string;
}

const initialValuesLogin: InitialValuesLogin = {
  userName: '',
  password: '',
};
const initialValuesRegister: InitialValuesRegister = {
  ...initialValuesLogin,
  email: '',
  passwordConfirmation: '',
};

export const Auth = (): JSX.Element => {
  const [isSignUp, setIsSignUp] = useState(true);
  const { user, logIn } = useAuth();

  const { request, status, setStatus, message, setMessage } = useAPI(
    isSignUp ? authAPI.register : authAPI.login,
  );

  const switchLogHandler = () => {
    setIsSignUp(prevState => !prevState);
  };

  const submitFormHandler = useCallback(
    async (userValues: FormikValues) => {
      const registerUserFormData = {
        username: userValues.userName,
        email: userValues.email,
        password: userValues.password,
      };
      const loginUserFormData = {
        username: userValues.userName,
        password: userValues.password,
      };

      const submitUserData = isSignUp
        ? registerUserFormData
        : loginUserFormData;
      const response = await request(submitUserData);

      if (
        (response?.status === 200 || 201 || 204) &&
        response?.data !== undefined
      ) {
        const token = response.data;
        logIn(token);
      }
    },
    [isSignUp, logIn, request],
  );

  return (
    <PageLayout>
      <Modal
        showModal={status !== null && !!message}
        modalCallback={() => {
          setStatus(null);
          setMessage('');
        }}
        status={status}
        modalMessage={message}
        navigateTo="/"
        conditionToNavigate={!!user}
      />
      <Toolbar>
        <NavLinkIcon
          to="/"
          aria-label="navigation link to homepage"
          $ml={{ de: 'auto' }}
          $iconSdw
        >
          <HomeSVG />
        </NavLinkIcon>
      </Toolbar>
      <Header $header="Account" $subHeader={isSignUp ? 'Register' : 'Log In'} />
      <Container
        $mxw={{ de: '280px' }}
        $fg={{ de: 1 }}
        $fd={{ de: 'column' }}
        $jc={{ de: 'center' }}
        $g={{ de: isSignUp ? '8px' : '20px' }}
      >
        <AppForm
          enableReinitialize
          initialValues={isSignUp ? initialValuesRegister : initialValuesLogin}
          onSubmit={values => submitFormHandler(values)}
          validationSchema={
            isSignUp ? validationSchemaRegister : validationSchemaLogin
          }
        >
          <>
            <AppFormInputText
              IconSVG={UserSVG}
              $label="Username"
              id="username"
              type="text"
              name="userName"
              placeholder="Username"
              autoCapitalize="off"
              spellCheck={false}
            />
            {isSignUp && (
              <AppFormInputText
                IconSVG={EmailSVG}
                $label="Email"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                autoCapitalize="off"
                spellCheck={false}
              />
            )}
            <AppFormInputText
              IconSVG={PasswordSVG}
              $label="Password"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              autoCapitalize="off"
              spellCheck={false}
            />
            {isSignUp && (
              <AppFormInputText
                IconSVG={PasswordSVG}
                $label="Password Confirmation"
                id="password-confirmation"
                type="password"
                name="passwordConfirmation"
                placeholder="Repeat password"
                autoCapitalize="off"
                spellCheck={false}
              />
            )}
            <AppFormSubmit
              $variant="flat"
              $size="medium"
              $labelShadow
              title={isSignUp ? 'Sign Up' : 'Log In'}
              aria-label={isSignUp ? 'sign up button' : 'log in button'}
              $flxAs={{ de: 'flex-end' }}
              $mt={{ de: isSignUp ? '8px' : 0 }}
              $bold
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
            $variant="flat"
            $size="medium"
            $labelShadow
            title="Sign in"
            aria-label="Sign in button"
            $flxAs={{ de: 'center' }}
            onClick={switchLogHandler}
            $bold
          >
            Click here
          </AppButton>
        </Container>
      </Container>
    </PageLayout>
  );
};
