import styled from 'styled-components/macro';

import { Container } from './layout';
import { Display1, ParagraphLarge, It } from './Typography';

interface HeaderProps {
  header: string;
  subHeader: string;
}

const CustomDisplay1 = styled(Display1)`
  line-height: var(--typ-d-1-fs);
`;

const CustomParagraphLarge = styled(ParagraphLarge)`
  line-height: var(--typ-p-lg-fs);
`;

export const Header = ({ header, subHeader }: HeaderProps): JSX.Element => (
  <Container fd={{ de: 'column' }}>
    <CustomDisplay1 txtSdw>{header}</CustomDisplay1>
    <CustomParagraphLarge txtSdw>
      <It>{subHeader}</It>
    </CustomParagraphLarge>
  </Container>
);
