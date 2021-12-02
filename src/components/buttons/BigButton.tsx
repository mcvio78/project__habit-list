import styled from 'styled-components/macro';

import { BasicButton, BasicButtonProps } from './BasicButton';
import { LabelLarge, CommonStyleProps } from '../Typography';

const ButtonContainer = styled(BasicButton).attrs(props => ({
  title: props.title,
}))<BasicButtonProps>`
  width: 260px;
  height: 86px;
  border-radius: 10px;
  outline: var(--clr-ac-v02-d) 1px solid;
  color: var(--clr-ac-v01);
  background-color: var(--clr-se-v01-d);
`;

interface BigButtonProps extends BasicButtonProps, CommonStyleProps {
  children: any;
}

export const BigButton = ({ children, ...props }: BigButtonProps) => (
  <ButtonContainer {...props}>
    <LabelLarge {...props} btnLabel>
      {children}
    </LabelLarge>
  </ButtonContainer>
);
