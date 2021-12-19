import styled from 'styled-components/macro';
import { useState } from 'react';

import { ButtonBasic, ButtonBasicProps } from './ButtonBasic';

interface ButtonHamburgerProps
  extends Omit<ButtonBasicProps, 'title' | 'boxSdw' | 'bkgCol'> {
  /** open button state (prop) */
  $open?: boolean;
  /** set open state handler (prop) */
  $setIsOpen?: () => void;
}

const ButtonContainer = styled(ButtonBasic).attrs(() => ({
  title: 'hamburgerButton',
  role: 'button',
}))<ButtonHamburgerProps>`
  width: 36px;
  height: 26px;
  justify-content: space-between;
  box-shadow: none;
  background-color: transparent;

  :focus {
    outline: rgba(var(--clr-ac-v03-rgb), 0.1) 2px solid;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: var(--clr-se-v01);
    box-shadow: ${({ $open }) =>
      !$open && `0 4px 4px rgba(var(--clr-nt-v02-rgb), 0.25)`};
    transition: all 0.5s linear;

    :first-child {
      transform: ${({ $open }) =>
        $open ? 'translateY(11px) rotate(45deg) ' : 'rotate(0) translateY(0)'};
    }

    :nth-child(2) {
      opacity: ${({ $open }) => ($open ? '0' : '1')};
      transform: ${({ $open }) => ($open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(3) {
      transform: ${({ $open }) =>
        $open
          ? 'translateY(-11px) rotate(-45deg) '
          : 'rotate(0) translateY(0)'};
    }
  }
`;

export const ButtonHamburger = ({ ...props }: ButtonHamburgerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ButtonContainer
      $open={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      <div />
      <div />
      <div />
    </ButtonContainer>
  );
};
