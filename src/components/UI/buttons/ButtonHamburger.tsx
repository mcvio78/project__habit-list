import styled from 'styled-components/macro';

import { ButtonBasic, ButtonBasicProps } from './ButtonBasic';

interface ButtonHamburgerProps
  extends Omit<ButtonBasicProps, 'title' | 'boxSdw' | 'bkgCol'> {
  /** open button state (prop) */
  $isOpen: boolean;
}

const ButtonContainer = styled(ButtonBasic).attrs({
  title: 'hamburgerButton',
  role: 'button',
})<ButtonHamburgerProps>`
  width: 36px;
  height: 26px;
  flex-shrink: 0;
  justify-content: space-between;
  box-shadow: none;
  background-color: transparent;
  z-index: 1000;

  :focus {
    outline: rgba(var(--clr-ac-v03-rgb), 0.1) 2px solid;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: var(--clr-se-v01);
    box-shadow: ${({ $isOpen }) =>
      !$isOpen && `0 4px 4px rgba(var(--clr-nt-v02-rgb), 0.25)`};
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
}: ButtonHamburgerProps) => {
  return (
    <ButtonContainer $isOpen={$isOpen} onClick={onClick} {...props}>
      <div />
      <div />
      <div />
    </ButtonContainer>
  );
};
