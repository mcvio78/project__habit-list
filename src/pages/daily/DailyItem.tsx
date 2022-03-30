import { useState } from 'react';
import styled from 'styled-components/macro';

import { Container, ContainerProps } from '../../components/layout';
import {
  ParagraphExtraSmall,
  ParagraphSmall,
} from '../../components/UI/Typography';
import { AppButtonIcon, AppButtonState } from '../../components/UI/button';
import { HabitType, TargetType } from '../../helpers/constants';
import { HabitWithFinalState } from '../../helpers/globalTypes';
import { ReactComponent as InfoSVG } from '../../assets/icons/icon-info_24dp.svg';

interface DailyItemProps extends HabitWithFinalState {
  openDialog: () => void;
}

const ButtonContainer = styled.button`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  border: none;
  color: inherit;
  border-radius: 4px;

  &:hover {
    background-color: var(--accent_06);
    cursor: pointer;
  }
`;

const DailyItemContainer = styled(Container)<ContainerProps>`
  border-bottom: 2px solid var(--secondary_05);
`;
/* eslint-disable */
export const DailyItem = ({
  habitName,
  habitType,
  targetType,
  targetValue,
  targetUnit,
  targetCurrent,
  habitFinalState,
  isHabitValid,
  habitRemainingTimeStr,
  expirationDate,
  openDialog,
}: DailyItemProps): JSX.Element => {
  const [isInfoBtnToggled, setIsInfoBtnToggled] = useState<boolean>(false);

  return (
    <Container $fd={{ de: 'column' }}>
      <DailyItemContainer
        $w={{ de: '100%' }}
        $mih={{ de: '40px' }}
        $jc={{ de: 'center' }}
        $p={{ de: '0 16px' }}
        $bs={{ de: 'border-box' }}
      >
        <Container
          $w={{ de: '100%' }}
          $mxw={{ de: '320px', sm: '420px' }}
          $jc={{ de: 'space-between' }}
          $p={{ de: '0 4px', sm: '0 6px' }}
          $bs={{ de: 'border-box' }}
        >
          <ButtonContainer onClick={() => (isHabitValid ? openDialog() : null)}>
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
          </ButtonContainer>
          <Container
            $w={{ de: '100%' }}
            $mxw={{ de: '80px', xs: '140px' }}
            $jc={{ de: 'space-between' }}
            $ai={{ de: 'center' }}
          >
            <AppButtonIcon
              aria-label="habit date expiration info"
              title="date info button"
              $iconSdw
              onClick={() => setIsInfoBtnToggled(!isInfoBtnToggled)}
            >
              <InfoSVG />
            </AppButtonIcon>
            {targetCurrent !== null && (
              <ParagraphExtraSmall
                $txtSdw
                $ital
                $txtClr="var(--neutral_12)"
                $m={{ de: '0 auto' }}
              >
                ( {targetCurrent}% )
              </ParagraphExtraSmall>
            )}
            <AppButtonState
              aria-label="habit status button"
              title="button showing habits status"
              $boxShadow
              $status={habitFinalState}
              disabled={!isHabitValid}
              onClick={() => {}}
            />
          </Container>
        </Container>
      </DailyItemContainer>
      {isInfoBtnToggled && (
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
            $bs={{ de: 'border-box' }}
            $p={{ de: '0 4px', sm: '0 6px' }}
          >
            <Container
              $w={{ de: '100%' }}
              $fd={{ de: 'column' }}
              $ai={{ de: 'flex-start' }}
              $p={{ de: '0 4px', sm: '0 6px' }}
            >
              <Container $w={{ de: '100%' }} $jc={{ de: 'space-between' }}>
                <ParagraphSmall
                  $txtSdw
                  $ital
                  $txtClr={
                    !isHabitValid ? 'var(--semantic_error_01)' : 'inherit'
                  }
                >
                  {isHabitValid ? 'Remaining Time:' : 'Expired:'}
                </ParagraphSmall>
                <ParagraphExtraSmall $txtSdw $ital>
                  {habitRemainingTimeStr}
                </ParagraphExtraSmall>
              </Container>
              <Container $w={{ de: '100%' }} $jc={{ de: 'space-between' }}>
                <ParagraphSmall $txtSdw $ital>
                  Expiration:
                </ParagraphSmall>
                <ParagraphExtraSmall $txtSdw $ital>
                  {expirationDate}
                </ParagraphExtraSmall>
              </Container>
            </Container>
          </Container>
        </DailyItemContainer>
      )}
    </Container>
  );
};
