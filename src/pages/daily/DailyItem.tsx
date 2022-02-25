import { useMemo } from 'react';
import styled from 'styled-components/macro';

import { Container, ContainerProps } from '../../components/layout';
import {
  ParagraphExtraSmall,
  ParagraphSmall,
} from '../../components/UI/Typography';
import { AppButtonState } from '../../components/UI/button';
import { TargetType } from '../../helpers/constants';
import { checkHabitState } from '../../utility/utils';
import { HabitStored } from '../../helpers/globalTypes';

interface DailyItemProps extends Omit<HabitStored, '_id'> {}

const DailyItemContainer = styled(Container)<ContainerProps>`
  border-bottom: 2px solid var(--secondary_05);
`;

export const DailyItem = ({
  habitName,
  habitType,
  targetType,
  targetValue,
  targetUnit,
  targetCurrent,
  habitStatus,
  expirationDate,
}: DailyItemProps): JSX.Element => {
  const { habitFinalState, isHabitValid } = useMemo(
    () =>
      checkHabitState({
        habitType,
        habitStatus,
        expirationDate,
      }),
    [habitType, habitStatus, expirationDate],
  );

  return (
    <DailyItemContainer
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
              $txtClr={
                targetType === TargetType.max
                  ? 'var(--semantic_error_01)'
                  : 'var(--semantic_success_01)'
              }
            >
              {targetType === TargetType.min ? '>=' : '<'}
              &ensp;
              {targetValue}
              &ensp;
              {targetUnit}
            </ParagraphExtraSmall>
          </Container>
        ) : (
          <ParagraphSmall $txtSdw $ital>
            {habitName}
          </ParagraphSmall>
        )}
        {targetCurrent || targetCurrent === 0 ? (
          <Container
            $w={{ de: '100%' }}
            $mxw={{ de: '80px', xs: '140px' }}
            $jc={{ de: 'space-between' }}
            $ai={{ de: 'center' }}
          >
            <ParagraphExtraSmall $txtSdw $ital $txtClr="var(--neutral_12)">
              ( {targetCurrent}% )
            </ParagraphExtraSmall>
            <AppButtonState
              aria-label="habit status button"
              title="button showing habits status"
              $boxShadow
              $status={habitFinalState}
              disabled={!isHabitValid}
            />
          </Container>
        ) : (
          <AppButtonState
            aria-label="habit status button"
            title="button showing habits status"
            $boxShadow
            $status={habitFinalState}
            disabled={!isHabitValid}
          />
        )}
      </Container>
    </DailyItemContainer>
  );
};
