import styled from 'styled-components/macro';

import { format } from 'date-fns';

import { Container, ContainerProps, PageLayout } from '../components/layout';
import {
  HeadingExtraLarge,
  HeadingSmall,
  NavLinkIcon,
  ParagraphSmall,
} from '../components/UI/Typography';
import { Header } from '../components/UI/Header';
import { Toolbar } from '../components/layout/Toolbar';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { ReactComponent as ArrowLeftSVG } from '../assets/icons/icon-arrow_left_24dp-np.svg';
import { ReactComponent as ArrowRightSVG } from '../assets/icons/icon-arrow_right_24dp-np.svg';
import { AppButtonIcon, AppButtonStatus } from '../components/UI/button';
import { ShowDailyItem } from './daily/ShowDailyItem';

const DateSelector = styled(Container)<ContainerProps>`
  background-color: var(--secondary_05);
  box-sizing: border-box;
  border-bottom: 2px solid var(--neutral_01);
`;

const date = format(new Date(), 'eee d MMM yyyy');

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
      <DateSelector
        as="section"
        $miw={{ de: '100%' }}
        $fd={{ de: 'column' }}
        $ai={{ de: 'center' }}
        $g={{ de: '8px' }}
        $p={{ de: '8px 16px 4px' }}
        $mt={{ de: '12px' }}
      >
        <Container
          $w={{ de: '100%' }}
          $mxw={{ de: '320px', sm: '420px' }}
          $jc={{ de: 'space-between' }}
          $ai={{ de: 'center' }}
        >
          <AppButtonIcon
            aria-label="previous day button"
            title="previous date navigation button"
            $iconSdw
          >
            <ArrowLeftSVG />
          </AppButtonIcon>
          <Container
            $w={{ de: '100%' }}
            $mxw={{ de: '180px', sm: '300px' }}
            $jc={{ de: 'center' }}
          >
            <HeadingExtraLarge $txtSdw $m={{ de: '0 4px' }}>
              {date}
            </HeadingExtraLarge>
          </Container>
          <AppButtonIcon
            aria-label="next day button"
            title="next date navigation button"
            $iconSdw
          >
            <ArrowRightSVG />
          </AppButtonIcon>
        </Container>
        <Container
          $w={{ de: '100%' }}
          $mxw={{ de: '320px', sm: '420px' }}
          $jc={{ de: 'space-between' }}
          $fw={{ de: 'wrap' }}
          $p={{ de: '0 4px', sm: '0 6px' }}
          $bs={{ de: 'border-box' }}
        >
          <Container $ai={{ de: 'center' }} $fw={{ de: 'wrap' }}>
            <HeadingSmall $txtSdw $ital>
              Habit List
            </HeadingSmall>
            <ParagraphSmall $txtSdw $ital>
              (daily+weekly)
            </ParagraphSmall>
          </Container>
          <AppButtonStatus
            aria-label="habit average status button"
            title="button showing current average habits status"
            $border="1px solid var(--neutral_01)"
            $backgroundColor="red"
            $boxShadow
          />
        </Container>
      </DateSelector>
      <ShowDailyItem
        habitName="habit name"
        habitTarget="habit target"
        habitCurrentAmount="( habit amount )"
        habitStatusButton={100}
      />
    </PageLayout>
  );
};
