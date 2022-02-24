import { useMemo } from 'react';
import styled from 'styled-components/macro';

import { Container, ContainerProps } from '../../components/layout';
import {
  ParagraphExtraSmall,
  ParagraphSmall,
} from '../../components/UI/Typography';
import { AppButtonState } from '../../components/UI/button';
import { HabitStatus, HabitType, TargetType } from '../../helpers/constants';
import { checkHabitState } from '../../utility/utils';

interface ShowDailyItemProps {
  habitName: string;
  habitType: HabitType;
  targetType?: TargetType;
  targetValue?: number | null;
  targetCurrent?: number | null;
  habitStatus: HabitStatus;
  expirationDate: number;
}

const ShowDailyItemContainer = styled(Container)<ContainerProps>`
  border-bottom: 2px solid var(--secondary_05);
`;

export const ShowDailyItem = ({
  habitName,
  habitType,
  targetType,
  targetValue,
  targetCurrent,
  habitStatus = HabitStatus.Unchecked,
  expirationDate,
}: ShowDailyItemProps): JSX.Element => {
  const { finalState, isHabitValid } = useMemo(
    () =>
      checkHabitState({
        habitType,
        habitStatus,
        expirationDate,
      }),
    [habitType, habitStatus, expirationDate],
  );

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
        $p={{ de: '0 4px', sm: '0 6px' }}
        $bs={{ de: 'border-box' }}
      >
        {targetType && targetValue ? (
          <Container $fd={{ de: 'column' }} $ai={{ de: 'flex-start' }}>
            <ParagraphSmall $txtSdw $ital>
              {habitName}
            </ParagraphSmall>
            <ParagraphExtraSmall
              $txtSdw
              $ital
              $txtClr={targetType === TargetType.max ? 'red' : 'green'}
            >
              {targetType === TargetType.min ? '>=' : '<'} {targetValue}
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
            <AppButtonState
              aria-label="habit status button"
              title="button showing habits status"
              $boxShadow
              $status={finalState}
              disabled={!isHabitValid}
            />
          </Container>
        ) : (
          <AppButtonState
            aria-label="habit status button"
            title="button showing habits status"
            $boxShadow
            $status={finalState}
            disabled={!isHabitValid}
          />
        )}
      </Container>
    </ShowDailyItemContainer>
  );
};
