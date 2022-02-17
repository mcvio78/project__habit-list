import styled from 'styled-components/macro';

import { Container, ContainerProps } from '../../components/layout';
import {
  ParagraphExtraSmall,
  ParagraphSmall,
} from '../../components/UI/Typography';
import { AppButtonStatus } from '../../components/UI/button';

interface ShowDailyItemProps {
  habitName: string;
  habitTarget?: string;
  habitCurrentAmount?: string;
  habitStatusButton: number;
}

const ShowDailyItemContainer = styled(Container)<ContainerProps>`
  border-bottom: 2px solid var(--secondary_05);
`;

export const ShowDailyItem = ({
  habitName,
  habitTarget,
  habitCurrentAmount,
  habitStatusButton,
}: ShowDailyItemProps): JSX.Element => {
  return (
    <ShowDailyItemContainer
      $w={{ de: '100%' }}
      $jc={{ de: 'center' }}
      $p={{ de: '0 16px' }}
      $bs={{ de: 'border-box' }}
    >
      <Container
        $w={{ de: '100%' }}
        $mxw={{ de: '320px', sm: '420px' }}
        $jc={{ de: 'space-between' }}
        $p={{ de: '4px', sm: '6px' }}
        $bs={{ de: 'border-box' }}
      >
        {habitTarget ? (
          <Container $fd={{ de: 'column' }} $ai={{ de: 'flex-start' }}>
            <ParagraphSmall $txtSdw $ital>
              {habitName}
            </ParagraphSmall>
            <ParagraphExtraSmall $txtSdw $ital>
              {habitTarget}
            </ParagraphExtraSmall>
          </Container>
        ) : (
          <ParagraphSmall $txtSdw $ital>
            {habitName}
          </ParagraphSmall>
        )}
        {habitCurrentAmount ? (
          <Container
            $w={{ de: '100%' }}
            $mxw={{ de: '140px' }}
            $jc={{ de: 'space-between' }}
            $ai={{ de: 'center' }}
          >
            <ParagraphExtraSmall $txtSdw $ital $txtClr="var(--neutral_12)">
              {habitCurrentAmount}
            </ParagraphExtraSmall>
            <AppButtonStatus
              aria-label="habit status button"
              title="button showing habits status"
              $backgroundColor={habitStatusButton < 100 ? 'red' : 'green'}
              $boxShadow
            />
          </Container>
        ) : (
          <AppButtonStatus
            aria-label="habit status button"
            title="button showing habits status"
            $backgroundColor={habitStatusButton < 100 ? 'red' : 'green'}
            $boxShadow
          />
        )}
      </Container>
    </ShowDailyItemContainer>
  );
};
