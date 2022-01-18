import { useState, useCallback } from 'react';
import * as Yup from 'yup';
import { FormikValues } from 'formik';
import { Navigate } from 'react-router-dom';

import { PageLayout, Container } from '../components/layout';
import { Header } from '../components/UI/Header';
import { AppButton } from '../components/UI/buttons';
import { NavLinkIcon, ParagraphSmall } from '../components/UI/Typography';
import { Modal } from '../components/UI/Modal';
import { Toolbar } from '../components/layout/Toolbar';
import { AppFormField, AppFormSubmit, AppForm } from '../components/form';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { ReactComponent as EmailSVG } from '../assets/icons/icon-email_24dp.svg';
import { ReactComponent as PasswordSVG } from '../assets/icons/icon-lock_24dp.svg';
import { ReactComponent as UserSVG } from '../assets/icons/icon-person_24dp.svg';
import { authAPI } from '../services/auth';
import { useAPI } from '../hooks/useApi';
import { useAuth } from '../hooks/useAuth';

const shapeLogin = {
  email: Yup.string().required('Email is required').email().label('Email'),
  password: Yup.string()
    .required('Password is required')
    .min(8)
    .label('Password'),
};
const shapeRegister = {
  firstName: Yup.string().required('First name is required').label('FirstName'),
  lastName: Yup.string().required('Last name is required').label('LastName'),
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
  firstName: '',
  lastName: '',
  ...initialValuesLogin,
  passwordConfirmation: '',
};

export const Auth = (): JSX.Element => {
  const [isSignUp, setIsSignUp] = useState(true);
  const { user, logIn } = useAuth();

  const { request, setErrorMessage, errorMessage } = useAPI(
    isSignUp ? authAPI.register : authAPI.login,
  );

  const switchLogHandler = () => {
    setIsSignUp(prevState => !prevState);
  };

  const submitFormHandler = useCallback(
    async (userValues: FormikValues) => {
      const registerFormData = [
        userValues.firstName,
        userValues.lastName,
        userValues.email,
        userValues.password,
      ];
      const loginFormData = [userValues.email, userValues.password];
      const submitData = isSignUp ? registerFormData : loginFormData;
      const response = await request(...submitData);

      if (
        (response?.status === 200 || 201 || 204) &&
        response?.data !== undefined
      ) {
        const token = response.data?.token;
        logIn(token);
      }
    },
    [isSignUp, logIn, request],
  );

  return (
    <PageLayout>
      <Modal
        showModal={errorMessage}
        modalCallback={() => setErrorMessage('')}
        modalMessage={errorMessage}
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
            {isSignUp && (
              <>
                <AppFormField
                  IconSVG={UserSVG}
                  $label="First Name"
                  id="first-name"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  autocapitalize="off"
                  spellcheck={false}
                />
                <AppFormField
                  IconSVG={UserSVG}
                  $label="Last Name"
                  id="last-name"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  autocapitalize="off"
                  spellcheck={false}
                />
              </>
            )}
            <AppFormField
              IconSVG={EmailSVG}
              $label="Email"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              autocapitalize="off"
              spellcheck={false}
            />
            <AppFormField
              IconSVG={PasswordSVG}
              $label="Password"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
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
              $flat
              $md
              $lblSdw
              $lblB
              title={isSignUp ? 'Sign Up' : 'Log In'}
              aria-label={isSignUp ? 'Sign Up Button' : 'Log In Button'}
              $flxAs={{ de: 'flex-end' }}
              $mt={{ de: isSignUp ? '8px' : 0 }}
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
            $flat
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
      {user && <Navigate to="/" />}
    </PageLayout>
  );
};
