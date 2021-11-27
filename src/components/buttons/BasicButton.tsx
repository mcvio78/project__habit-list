import styled from 'styled-components/macro';

export interface BasicButtonProps {
  type?: string;
  title: string;
  bgColor?: string;
}

export const BasicButton = styled.button.attrs(props => ({
  type: props.type || 'button',
  title: props.title,
}))<BasicButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor || 'transparent'};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
