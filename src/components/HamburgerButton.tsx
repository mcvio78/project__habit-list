import styled from 'styled-components/macro';
import React, { useState } from 'react';

interface ButtonContainerProps {
  open: boolean;
}

const ButtonContainer = styled.button.attrs({
  type: 'button',
  title: 'hamburgerButton',
})<ButtonContainerProps>`
  width: 40px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  :focus {
    outline: rgba(var(--shadow-text-rgb), 0.1) 2px solid;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: var(--colors-text);
    box-shadow: ${({ open }) =>
      !open && `0 4px 4px rgba(var(--shadow-text-rgb), 0.25)`};
    transition: all 0.5s linear;

    :first-child {
      transform: ${({ open }) =>
        open ? 'translateY(11px) rotate(45deg) ' : 'rotate(0) translateY(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? 'translateY(-11px) rotate(-45deg) ' : 'rotate(0) translateY(0)'};
    }
  }
`;

export const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ButtonContainer open={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </ButtonContainer>
  );
};
