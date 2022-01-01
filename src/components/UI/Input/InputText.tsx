import styled from 'styled-components';

export const InputText = styled.input.attrs({
  className: 'input-text',
})`
  min-width: 60px;
  min-height: 28px;
  padding: 0 5px;
  border: none;
  flex: 1 0;
  font-style: inherit;
  font-variation-settings: 'wght' 500;
  font-weight: 500;
  line-height: 0;
  color: var(--neutral_08);
  background-color: transparent;
  outline: none;
  text-align: center;
`;