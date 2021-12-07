import styled from 'styled-components/macro';

import { ButtonBasic, BasicButtonProps } from './ButtonBasic';
import { LabelLarge, CommonStyleProps } from '../Typography';

const ButtonContainer = styled(ButtonBasic).attrs(props => ({
  title: props.title,
}))<BasicButtonProps>`
  max-width: 260px;
  width: 100%;
  height: 86px;
  border-radius: 10px;
  outline: var(--clr-ac-v02-d) 1px solid;
  color: var(--clr-ac-v01-d);
  background-color: var(--clr-se-v01-d);
`;

interface BigButtonProps extends BasicButtonProps, CommonStyleProps {
  children: any;
}

export const ButtonLarge = ({
  it,
  txtSdw,
  children,
  ...props
}: BigButtonProps) => (
  <ButtonContainer boxSdw {...props}>
    <LabelLarge it txtSdw>
      {children}
    </LabelLarge>
  </ButtonContainer>
);
