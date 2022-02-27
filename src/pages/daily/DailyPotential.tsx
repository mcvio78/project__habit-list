import styled from 'styled-components/macro';
import { Container, ContainerProps } from '../../components/layout';
import {
  HeadingSmall,
  HeadingExtraLarge,
} from '../../components/UI/Typography';

interface DailyPotentialProps {
  habitsAmount: number;
  habitsCompleted: number;
}

const DailyPotentialContainer = styled(Container)<ContainerProps>`
  background-color: var(--secondary_05);
  border-top: 2px solid var(--neutral_01);
`;

const DailyPotentialScore = styled(HeadingExtraLarge)`
  text-shadow: var(--neutral_01) 0 0 1px, var(--neutral_01) 0 0 1px,
    var(--neutral_01) 0 0 1px, var(--neutral_01) 0 0 1px,
    var(--neutral_01) 0 0 1px, var(--neutral_01) 0 0 1px;
  -webkit-font-smoothing: antialiased;
`;

export const DailyPotential = ({
  habitsAmount = 0,
  habitsCompleted = 0,
}: DailyPotentialProps): JSX.Element => (
  <DailyPotentialContainer
    as="section"
    $miw={{ de: '100%' }}
    $mih={{ de: '64px' }}
    $jc={{ de: 'center' }}
    $ai={{ de: 'center' }}
    $p={{ de: '8px 16px 4px' }}
    $bs={{ de: 'border-box' }}
  >
    <Container
      $w={{ de: '100%' }}
      $mxw={{ de: '320px', sm: '420px' }}
      $p={{ de: '0 4px', sm: '0 6px' }}
      $jc={{ de: 'space-between' }}
      $ai={{ de: 'center' }}
      $bs={{ de: 'border-box' }}
    >
      <HeadingSmall $txtSdw $ital>
        Daily Potential
      </HeadingSmall>
      <DailyPotentialScore $txtSdw $ital $bold $txtClr="var(--neutral_15)">
        {habitsAmount}/{habitsCompleted}
      </DailyPotentialScore>
    </Container>
  </DailyPotentialContainer>
);
