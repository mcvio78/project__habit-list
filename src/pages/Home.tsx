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
import { SideBar } from '../components/UI/SideBar';
import { Toolbar } from '../components/layout/Toolbar';
import { useAuth } from '../hooks/useAuth';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { NavigationItems } from '../components/UI/navigation';

export const Home = (): JSX.Element => {
  const { user, logOut } = useAuth();
  const breakpoint = useBreakpoint();

  return (
    <PageLayout>
      <Toolbar>
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
