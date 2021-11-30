import styled from 'styled-components/macro';

export interface BasicButtonProps {
  title: string;
  'aria-label': string;
  id?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  name?: string;
  value?: string | number;
  text?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  bgColor?: string;
  shadowBox?: boolean;
}

export const BasicButton = styled.button.attrs(props => ({
  title: props.title,
  type: props.type || 'button',
}))<BasicButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || 'var(--clr-se-v01)'};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  box-shadow: ${({ shadowBox }) =>
    shadowBox ? ` 0 4px 4px rgba(var(--clr-nt-v02-rgb), 0.25)` : 'none'};
`;
