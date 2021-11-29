import styled from 'styled-components/macro';

import { BasicButton, BasicButtonProps } from './BasicButton';
import { LabelLarge, CommonStyleProps } from '../Typography';

const ButtonContainer = styled(BasicButton).attrs(() => ({
  title: 'bigButton',
  bgColor: 'var(--clr-nt-v01)',
}))<BasicButtonProps>`
  width: 220px;
  height: 70px;
  border-radius: 8px;
`;

interface BigButtonProps
  extends Omit<BasicButtonProps, 'title'>,
    CommonStyleProps {
  children: any;
}

export const BigButton = ({ children, ...props }: BigButtonProps) => (
  <ButtonContainer {...props}>
    <LabelLarge {...props} color="var(--clr-ac-v01)">
      {children}
    </LabelLarge>
  </ButtonContainer>
);
