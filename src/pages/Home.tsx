import { useNavigate } from 'react-router-dom';

import { PageLayout, Container } from '../components/layout';
import {
  ParagraphLarge,
  NavLinkLarge,
  SpanLarge,
  B,
  It,
} from '../components/UI/Typography';
import { AppButton } from '../components/UI/button';
import { Header } from '../components/UI/Header';
import { SideBar } from '../components/UI/Sidebar';
import { Toolbar } from '../components/layout/Toolbar';
import { useAuth } from '../hooks/useAuth';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { NavigationItems } from '../components/UI/navigation';

export const Home = (): JSX.Element => {
  const { user, logOut } = useAuth();
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Toolbar>
        {!user ? (
          <NavLinkLarge
            to="/auth"
            aria-label="navigation link to authentication page"
            $txtSdw
          >
            <It>Sign Up</It>
          </NavLinkLarge>
        ) : (
          <AppButton
            $variant="text"
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
        {breakpoint === 'de' || breakpoint === 'xs' ? (
          <SideBar />
        ) : (
          <NavigationItems />
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
        $m={{ de: 'auto 0 24px 0' }}
        $fd={{ de: 'column' }}
        $ai={{ de: 'center' }}
        $g={{ de: '30px' }}
      >
        <ParagraphLarge $txtSdw>
          <i>Start organizing your life!</i>
        </ParagraphLarge>
        {user && (
          <AppButton
            $variant="flat"
            $size="medium"
            aria-label="create habits button"
            title="create habits"
            onClick={() => navigate('/create')}
          >
            <B>
              <It>Create Habits</It>
            </B>
          </AppButton>
        )}
      </Container>
    </PageLayout>
  );
};
