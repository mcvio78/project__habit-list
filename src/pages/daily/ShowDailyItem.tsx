import styled from 'styled-components/macro';

import { Container, ContainerProps } from '../../components/layout';
import {
  ParagraphExtraSmall,
  ParagraphSmall,
} from '../../components/UI/Typography';
import { AppButtonStatus } from '../../components/UI/button';
import { HabitType, HabitState, FinalState } from '../../helpers/constants';
import { checkHabitStatus } from '../../utility/utils';

interface ShowDailyItemProps {
  habitName: string;
  habitType: HabitType;
  targetValue?: string;
  targetCurrent?: string;
  habitState: HabitState;
  expirationDate: number;
}

const ShowDailyItemContainer = styled(Container)<ContainerProps>`
  border-bottom: 2px solid var(--secondary_05);
`;

export const ShowDailyItem = ({
  habitName,
  habitType,
  targetValue,
  targetCurrent,
  habitState = HabitState.Unchecked,
  expirationDate,
}: ShowDailyItemProps): JSX.Element => {
  const habitFinalState = checkHabitStatus({
    habitType,
    habitState,
    expirationDate,
  });

  return (
    <ShowDailyItemContainer
      $w={{ de: '100%' }}
      $mih={{ de: '40px' }}
      $jc={{ de: 'center' }}
      $ai={{ de: 'center' }}
      $p={{ de: '0 16px' }}
      $bs={{ de: 'border-box' }}
    >
      <Container
        $w={{ de: '100%' }}
        $mxw={{ de: '320px', sm: '420px' }}
        $jc={{ de: 'space-between' }}
        $ai={{ de: 'center' }}
        $p={{ sm: '4px' }}
        $bs={{ de: 'border-box' }}
      >
        {targetValue ? (
          <Container $fd={{ de: 'column' }} $ai={{ de: 'flex-start' }}>
            <ParagraphSmall $txtSdw $ital>
              {habitName}
            </ParagraphSmall>
            <ParagraphExtraSmall $txtSdw $ital>
              {targetValue}
            </ParagraphExtraSmall>
          </Container>
        ) : (
          <ParagraphSmall $txtSdw $ital>
            {habitName}
          </ParagraphSmall>
        )}
        {targetCurrent ? (
          <Container
            $w={{ de: '100%' }}
            $mxw={{ de: '140px' }}
            $jc={{ de: 'space-between' }}
            $ai={{ de: 'center' }}
          >
            <ParagraphExtraSmall $txtSdw $ital $txtClr="var(--neutral_12)">
              ( {targetCurrent} )
            </ParagraphExtraSmall>
            <AppButtonStatus
              aria-label="habit status button"
              title="button showing habits status"
              $boxShadow
              $status={habitFinalState}
              disabled={
                habitFinalState === FinalState.SuccessfulExpired ||
                habitFinalState === FinalState.FailedExpired ||
                habitFinalState === FinalState.PostponedExpired
              }
            />
          </Container>
        ) : (
          <AppButtonStatus
            aria-label="habit status button"
            title="button showing habits status"
            $boxShadow
            $status={habitFinalState}
            disabled={
              habitFinalState === FinalState.SuccessfulExpired ||
              habitFinalState === FinalState.FailedExpired ||
              habitFinalState === FinalState.PostponedExpired
            }
          />
        )}
      </Container>
    </ShowDailyItemContainer>
  );
};
