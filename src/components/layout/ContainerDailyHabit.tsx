import { ReactNode } from 'react';
import styled from 'styled-components/macro';

import { Container, ContainerProps } from './Container';
import { ParagraphExtraSmall, ParagraphSmall } from '../UI/Typography';

interface ContainerDailyHabitProps {
  habitName: string;
  habitTarget?: string;
  habitCurrentAmount?: string;
  habitStatusButton: ReactNode;
}

const ContainerHabitStyled = styled(Container)<ContainerProps>`
  border-bottom: 2px solid var(--secondary_05);
`;

export const ContainerDailyHabit = ({
  habitName,
  habitTarget,
  habitCurrentAmount,
  habitStatusButton,
}: ContainerDailyHabitProps): JSX.Element => {
  return (
    <ContainerHabitStyled
      $w={{ de: '100%' }}
      $jc={{ de: 'center' }}
      $p={{ de: '0 16px' }}
      $bs={{ de: 'border-box' }}
    >
      <Container
        $w={{ de: '100%' }}
        $mxw={{ de: '320px', sm: '420px' }}
        $jc={{ de: 'space-between' }}
        $p={{ de: '2px 4px', sm: '4px 6px' }}
        $bs={{ de: 'border-box' }}
      >
        {habitTarget ? (
          <Container $ai={{ de: 'center' }} $fw={{ de: 'wrap' }}>
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
            {habitStatusButton}
          </Container>
        ) : (
          { habitStatusButton }
        )}
      </Container>
    </ContainerHabitStyled>
  );
};
