import styled from 'styled-components/macro';

import { ButtonBasic, ButtonBasicProps } from './ButtonBasic';

interface ButtonHamburgerProps
  extends Omit<ButtonBasicProps, 'title' | 'boxSdw' | 'bkgCol'> {
  /** open button state (prop) */
  $isOpen: boolean;
}

const ButtonContainer = styled(ButtonBasic).attrs({
  className: 'hamburger-button',
  title: 'hamburgerButton',
  role: 'button',
})<ButtonHamburgerProps>`
  width: 36px;
  height: 26px;
  flex-shrink: 0;
  justify-content: space-between;
  box-shadow: none;
  background-color: transparent;
  outline: var(--neutral_06) 2px solid;

  div {
    width: 100%;
    height: 4px;
    background-color: var(--secondary_01);
    box-shadow: ${({ $isOpen }) =>
      !$isOpen && `0 4px 4px var(--neutral_05_op025)`};
    transition: all 0.5s linear;

    :first-child {
      transform: ${({ $isOpen }) =>
        $isOpen
          ? 'translateY(11px) rotate(45deg) '
          : 'rotate(0) translateY(0)'};
    }

    :nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen
          ? 'translateY(-11px) rotate(-45deg) '
          : 'rotate(0) translateY(0)'};
    }
  }
`;

export const ButtonHamburger = ({
  $isOpen,
  onClick,
  ...props
}: ButtonHamburgerProps): JSX.Element => {
  return (
    <ButtonContainer $isOpen={$isOpen} onClick={onClick} {...props}>
      <div />
      <div />
      <div />
    </ButtonContainer>
  );
};
