import { useNavigate } from 'react-router-dom';

import { PageLayout, Container } from '../components/layout';
import {
  ParagraphLarge,
  NavLinkLarge,
  SpanLarge,
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
            $ital
            $txtSdw
          >
            Sign Up
          </NavLinkLarge>
        ) : (
          <AppButton
            $variant="text"
            aria-label="logout button"
            title="logout"
            onClick={logOut}
          >
            <SpanLarge $txtSdw $ital $bold>
              Logout
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
      {user && (
        <Container
          $fd={{ de: 'column' }}
          $fg={{ de: 1 }}
          $jc={{ de: 'center' }}
          $ai={{ de: 'flex-start' }}
          $g={{ de: '12px' }}
        >
          <NavLinkLarge
            to="/daily"
            aria-label="navigation link to daily habits page"
            $ital
            $txtSdw
          >
            Daily
          </NavLinkLarge>
          <NavLinkLarge
            to="/weekly"
            aria-label="navigation link to weekly habits page"
            $ital
            $txtSdw
          >
            Weekly
          </NavLinkLarge>
          <NavLinkLarge
            to="/monthly"
            aria-label="navigation link to monthly habits page"
            $ital
            $txtSdw
          >
            Monthly
          </NavLinkLarge>
        </Container>
      )}

      <Container
        $m={{ de: 'auto 0 24px 0' }}
        $fd={{ de: 'column' }}
        $ai={{ de: 'center' }}
        $g={{ de: '24px' }}
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
            $ital
            $bold
          >
            Create Habits
          </AppButton>
        )}
      </Container>
    </PageLayout>
  );
};
