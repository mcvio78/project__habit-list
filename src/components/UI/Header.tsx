import styled from 'styled-components/macro';

import { Container, ContainerProps } from '../layout';
import { Display1, ParagraphLarge, It } from './Typography';

interface HeaderProps {
  /** Page header */
  $header: string | JSX.Element;
  /** Page sub header */
  $subHeader?: string;
}

const CustomContainer = styled(Container).attrs(props => ({
  role: 'heading',
  'aria-level': props['aria-level'] || 1,
}))<ContainerProps>``;

export const Header = ({ $header, $subHeader }: HeaderProps): JSX.Element => (
  <CustomContainer $fd={{ de: 'column' }} as="header">
    <Display1 $txtSdw style={{ lineHeight: $subHeader && 'var(--typ-d-1-fs)' }}>
      {$header}
    </Display1>
    <ParagraphLarge $txtSdw style={{ lineHeight: 'var(--typ-p-lg-fs)' }}>
      <It>{$subHeader}</It>
    </ParagraphLarge>
  </CustomContainer>
);
