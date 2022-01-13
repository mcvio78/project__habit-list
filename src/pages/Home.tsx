import { useCallback, useEffect } from 'react';

import { PageLayout, Container } from '../components/layout';
import {
  ParagraphLarge,
  NavLinkLarge,
  SpanLarge,
  B,
  It,
} from '../components/Typography';
import { AppButton } from '../components/UI/buttons';
import { Header } from '../components/Header';
import { SideDrawer } from '../components/UI/SideDrawer';
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
          if (err?.response) {
            /* eslint-disable-next-line */
            console.log('error: ', err.response.data);
            if (err.response.status === 401) {
              authStorage.removeToken();
            }
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
      <Container
        $w={{ de: '100%' }}
        $mih={{ de: '40px' }}
        $bs={{ de: 'border-box' }}
        $jc={{ de: 'space-between' }}
        $ai={{ de: 'center' }}
      >
        {!user ? (
          <NavLinkLarge to="/auth" $txtSdw>
            <It>Sign In</It>
          </NavLinkLarge>
        ) : (
          <AppButton
            $tb
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
        <SideDrawer />
      </Container>
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
          $nb
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
