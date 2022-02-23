import styled from 'styled-components/macro';
import { format } from 'date-fns';

import { Container, ContainerProps } from '../../components/layout';
import { AppButtonIcon, AppButtonStatus } from '../../components/UI/button';
import { ReactComponent as ArrowLeftSVG } from '../../assets/icons/icon-arrow_left_24dp-np.svg';
import {
  HeadingExtraLarge,
  HeadingSmall,
  ParagraphSmall,
} from '../../components/UI/Typography';
import { ReactComponent as ArrowRightSVG } from '../../assets/icons/icon-arrow_right_24dp-np.svg';
import { FinalState } from '../../helpers/constants';

interface DateSelectorProps {
  date: Date;
  onClickHandler: (args: number) => void;
  averageStatus: number;
}

const SelectorContainer = styled(Container)<ContainerProps>`
  background-color: var(--secondary_05);
  box-sizing: border-box;
  border-bottom: 2px solid var(--neutral_01);
`;

export const DateSelector = ({
  date,
  onClickHandler,
  averageStatus,
}: DateSelectorProps): JSX.Element => (
  <SelectorContainer
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
        <ArrowLeftSVG onClick={() => onClickHandler(-1)} />
      </AppButtonIcon>
      <Container
        $w={{ de: '100%' }}
        $mxw={{ de: '180px', sm: '300px' }}
        $jc={{ de: 'center' }}
      >
        <HeadingExtraLarge $txtSdw $m={{ de: '0 4px' }}>
          {format(date, 'eee d MMM yyyy')}
        </HeadingExtraLarge>
      </Container>
      <AppButtonIcon
        aria-label="next day button"
        title="next date navigation button"
        $iconSdw
      >
        <ArrowRightSVG onClick={() => onClickHandler(1)} />
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
      {averageStatus !== 0 && (
        <AppButtonStatus
          aria-label="habit average status button"
          title="button showing current average habits status"
          $border="1px solid var(--neutral_01)"
          $boxShadow
          $status={FinalState.SuccessfulActive}
        />
      )}
    </Container>
  </SelectorContainer>
);
