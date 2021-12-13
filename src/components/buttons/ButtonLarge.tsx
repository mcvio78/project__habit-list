import styled from 'styled-components/macro';

import { ButtonBasic, ButtonBasicProps } from './ButtonBasic';
import { LabelLarge, CommonStyleProps } from '../Typography';

const ButtonContainer = styled(ButtonBasic)<ButtonBasicProps>`
  width: 100%;
  max-width: 260px;
  height: 86px;
  border-radius: 10px;
  outline: var(--clr-ac-v02-d) 1px solid;
  color: var(--clr-ac-v01-d);
  background-color: var(--clr-se-v01-d);
`;

export interface ButtonLargeProps extends ButtonBasicProps, CommonStyleProps {}

export const ButtonLarge = ({ children, ...props }: ButtonLargeProps) => (
  <ButtonContainer boxSdw {...props}>
    <LabelLarge it txtSdw>
      {children}
    </LabelLarge>
  </ButtonContainer>
);
