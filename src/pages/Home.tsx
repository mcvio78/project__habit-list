import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageLayout, Container } from '../components/layout';
import {
  ParagraphLarge,
  NavLinkLarge,
  SpanLarge,
  ParagraphSmall,
  ParagraphExtraSmall,
} from '../components/UI/Typography';
import { AppButton } from '../components/UI/button';
import { Header } from '../components/UI/Header';
import { SideBar } from '../components/UI/Sidebar';
import { Toolbar } from '../components/layout/Toolbar';
import {
  useAuth,
  useBreakpoint,
  useAPI,
  useDaily,
  useResults,
  useSelectedDate,
  useLoadingCX,
} from '../hooks/';
import { NavigationItems } from '../components/UI/navigation';
import { habitAPI } from '../services/habit';
import { dateToStartDayUTS } from '../utility/utils';
import { Modal } from '../components/UI/Modal';
import { errorStatus } from '../utility/request/statuses';

export const Home = (): JSX.Element => {
  const { loadingCX } = useLoadingCX();
  const { daily } = useDaily();
  const { results } = useResults();
  const { user, logOut } = useAuth();
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();
  const { setSelectedDateCB } = useSelectedDate();
  const { request, status, setStatus, message, setMessage } = useAPI(
    habitAPI.getDailyHabits,
  );
  const { setDailyStateAndOutcomes } = useDaily();

  const setCurrentDateContext = async (unixDate?: number) => {
    const unixDateStart = unixDate || dateToStartDayUTS(new Date());
    const response = await request(unixDateStart);
    setSelectedDateCB(unixDateStart);
    setDailyStateAndOutcomes(response?.data);
  };

  useEffect(() => {
    if (!loadingCX && user) {
      setCurrentDateContext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingCX, user]);

  return (
    <PageLayout>
      <Modal
        showModal={errorStatus(status) && !!message}
        modalCallback={() => {
          setStatus(null);
          setMessage('');
        }}
        status={status}
        modalMessage={message}
      />
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
          $w={{ de: '100%' }}
          $fg={{ de: 1 }}
          $jc={{ de: 'center' }}
          $ai={{ de: 'flex-start' }}
          $g={{ de: '24px' }}
          $mt={{ de: '24px' }}
          $fw={{ de: 'wrap' }}
          $p={{ de: '0 16px' }}
          $bs={{ de: 'border-box' }}
        >
          <Container $fd={{ de: 'column' }} $g={{ de: '8px' }}>
            <NavLinkLarge
              to="/daily"
              aria-label="navigation link to daily habits page"
              $ital
              $txtSdw
            >
              Daily
            </NavLinkLarge>
            {user && (
              <>
                <ParagraphLarge $ital $txtSdw>
                  {daily && daily.length}
                </ParagraphLarge>
                <Container
                  $fd={{ de: 'column' }}
                  $ai={{ de: 'flex-start' }}
                  $g={{ de: '4px' }}
                >
                  <Container>
                    <ParagraphExtraSmall>Pending</ParagraphExtraSmall>&ensp;
                    <ParagraphSmall>
                      {results.dailyResult.pending}
                    </ParagraphSmall>
                  </Container>
                  <Container>
                    <ParagraphExtraSmall>Successful</ParagraphExtraSmall>&ensp;
                    <ParagraphSmall>
                      {results.dailyResult.successful}
                    </ParagraphSmall>
                  </Container>
                  <Container>
                    <ParagraphExtraSmall>Failed</ParagraphExtraSmall>&ensp;
                    <ParagraphSmall>
                      {results.dailyResult.failed}
                    </ParagraphSmall>
                  </Container>
                  <Container>
                    <ParagraphExtraSmall>Postponed</ParagraphExtraSmall>&ensp;
                    <ParagraphSmall>
                      {results.dailyResult.postponed}
                    </ParagraphSmall>
                  </Container>
                </Container>
              </>
            )}
          </Container>
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
        $p={{ de: '0 16px' }}
        $bs={{ de: 'border-box' }}
      >
        <ParagraphLarge $txtSdw>
          <i>Start organizing your&nbsp;life!</i>
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
