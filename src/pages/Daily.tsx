import styled from 'styled-components/macro';

import { format } from 'date-fns';

import { Container, ContainerProps, PageLayout } from '../components/layout';
import {
  HeadingExtraLarge,
  HeadingMedium,
  NavLinkIcon,
  It,
  ParagraphMedium,
} from '../components/UI/Typography';
import { Header } from '../components/UI/Header';
import { Toolbar } from '../components/layout/Toolbar';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { ReactComponent as ArrowLeftSVG } from '../assets/icons/icon-arrow_left_24dp-np.svg';
import { ReactComponent as ArrowRightSVG } from '../assets/icons/icon-arrow_right_24dp-np.svg';
import { AppIconButton } from '../components/UI/button';

const DateSelectorContainer = styled(Container)<ContainerProps>`
  background-color: var(--secondary_05);
  box-sizing: border-box;
  border-bottom: 2px solid var(--neutral_01);
`;

const date = format(new Date(), 'eee e MMM yyyy');

export const Daily = (): JSX.Element => {
  return (
    <PageLayout>
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
      <Header $header="Daily Habits" />
      <DateSelectorContainer
        $miw={{ de: '100%' }}
        $fd={{ de: 'column' }}
        $ai={{ de: 'center' }}
        $g={{ de: '8px' }}
        $p={{ de: '4px 16px' }}
        $m={{ de: '12px 16px 0' }}
      >
        <Container $ai={{ de: 'center' }}>
          <AppIconButton $iconSdw>
            <ArrowLeftSVG />
          </AppIconButton>
          <HeadingExtraLarge $txtSdw $m={{ de: '0 4px' }}>
            {date}
          </HeadingExtraLarge>
          <AppIconButton $iconSdw>
            <ArrowRightSVG />
          </AppIconButton>
        </Container>
        <Container
          $w={{ de: '100%' }}
          $ai={{ de: 'center' }}
          $jc={{ de: 'center' }}
          $fw={{ de: 'wrap' }}
        >
          <HeadingMedium $txtSdw>
            <It>Habit List</It>
          </HeadingMedium>
          <ParagraphMedium $txtSdw>
            <It>(Daily+Weekly)</It>
          </ParagraphMedium>
        </Container>
      </DateSelectorContainer>
    </PageLayout>
  );
};
