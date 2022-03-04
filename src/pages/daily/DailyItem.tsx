import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components/macro';

import { Container, ContainerProps } from '../../components/layout';
import {
  ParagraphExtraSmall,
  ParagraphSmall,
} from '../../components/UI/Typography';
import { AppButtonState } from '../../components/UI/button';
import {
  HabitFinalState,
  HabitType,
  TargetType,
} from '../../helpers/constants';
import { HabitStored } from '../../helpers/globalTypes';

interface DailyItemProps extends HabitStored {
  habitFinalState: HabitFinalState;
  isHabitValid: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
}

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
  habitFinalState,
  isHabitValid,
  onClick,
}: DailyItemProps): JSX.Element => {
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
        <Container $fd={{ de: 'column' }} $ai={{ de: 'flex-start' }}>
          <ParagraphSmall
            $txtSdw
            $ital
            $txtClr={
              habitType === HabitType.Avoid
                ? 'var(--semantic_error_01)'
                : 'inherit'
            }
          >
            {habitName}
          </ParagraphSmall>
          {targetType && targetValue && (
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
          )}
        </Container>
        <Container
          $w={{ de: '100%' }}
          $mxw={{ de: '80px', xs: '140px' }}
          $jc={{ de: targetCurrent !== null ? 'space-between' : 'flex-end' }}
          $ai={{ de: 'center' }}
        >
          {targetCurrent !== null && (
            <ParagraphExtraSmall $txtSdw $ital $txtClr="var(--neutral_12)">
              ( {targetCurrent}% )
            </ParagraphExtraSmall>
          )}
          <AppButtonState
            aria-label="habit status button"
            title="button showing habits status"
            $boxShadow
            $status={habitFinalState}
            disabled={!isHabitValid}
            onClick={() => onClick(true)}
          />
        </Container>
      </Container>
    </DailyItemContainer>
  );
};
