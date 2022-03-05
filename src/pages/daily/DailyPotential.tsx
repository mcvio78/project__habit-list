import styled from 'styled-components/macro';

import { Container, ContainerProps } from '../../components/layout';
import {
  HeadingSmall,
  HeadingExtraLarge,
  ParagraphExtraSmall,
} from '../../components/UI/Typography';
import { Results } from '../../auth/context';

interface DailyPotentialProps {
  results: Results;
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
  results,
}: DailyPotentialProps): JSX.Element => {
  const {
    dailyResult: { pending, successful, failed, postponed },
  } = results;

  return (
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
        <Container $ai={{ de: 'center' }} $fw={{ de: 'wrap' }}>
          <HeadingSmall $txtSdw $ital>
            Daily Potential
          </HeadingSmall>
          &ensp;
          <ParagraphExtraSmall $txtSdw>
            ( Postponed: {postponed} )
          </ParagraphExtraSmall>
        </Container>
        <DailyPotentialScore $txtSdw $ital $bold $txtClr="var(--neutral_15)">
          {successful}/{pending + successful + failed}
        </DailyPotentialScore>
      </Container>
    </DailyPotentialContainer>
  );
};
