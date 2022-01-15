import { useCallback, useEffect } from 'react';

import { PageLayout, Container } from '../components/layout';
import {
  ParagraphLarge,
  NavLinkLarge,
  SpanLarge,
  B,
  It,
} from '../components/UI/Typography';
import { AppButton } from '../components/UI/buttons';
import { Header } from '../components/UI/Header';
import { SideDrawer } from '../components/UI/SideDrawer';
import { Toolbar } from '../components/layout/Toolbar';
import { useAuth } from '../hooks/useAuth';
import { authStorage } from '../utility/auth/storage';
import { authAPI } from '../services/auth';
import { isAxiosError } from '../utility/request/axios';

export const Home = (): JSX.Element => {
  const { user, logOut, setUserContextIfToken } = useAuth();

  const setUserIfStoredToken = useCallback(async () => {
    const authToken = authStorage.getToken();
    if (authToken && user === null) {
      try {
        const isTokenValid = await authAPI.checkTokenValidity();
        if (isTokenValid) {
          setUserContextIfToken(authToken);
        }
      } catch (err) {
        if (isAxiosError(err)) {
          if (err?.response?.status === 401) {
            authStorage.removeToken();
          }
        }
      }
    }
  }, [user, setUserContextIfToken]);

  useEffect(() => {
    setUserIfStoredToken();
  }, [setUserIfStoredToken]);

  return (
    <PageLayout>
      <Toolbar>
        <SideDrawer />
        {!user ? (
          <NavLinkLarge
            to="/auth"
            aria-label="navigation link to authentication page"
            $txtSdw
          >
            <It>Sign In</It>
          </NavLinkLarge>
        ) : (
          <AppButton
            $text
            aria-label="logout button"
            title="logout"
            onClick={logOut}
          >
            <SpanLarge $txtSdw>
              <B>
                <It>Logout</It>
              </B>
            </SpanLarge>
          </AppButton>
        )}
      </Toolbar>
      <Header
        $header={
          <span>
            My
            <br />
            Habits List
          </span>
        }
      />
      <Container
        $m={{ de: 'auto 0 30px 0' }}
        $fd={{ de: 'column' }}
        $ai={{ de: 'center' }}
        $g={{ de: '30px' }}
      >
        <ParagraphLarge $txtSdw>
          <i>Start organizing your life!</i>
        </ParagraphLarge>
        <AppButton
          $lg
          $std
          $boxSdw
          aria-label="create habits button"
          title="create habits"
        >
          <B>
            <It>Create Habits</It>
          </B>
        </AppButton>
      </Container>
    </PageLayout>
  );
};
