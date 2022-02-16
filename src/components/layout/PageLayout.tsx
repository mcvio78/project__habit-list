import styled from 'styled-components/macro';

export const PageLayout = styled.div.attrs(props => ({
  className: props.className || 'page-layout',
}))`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin: 20px 0;
  border-radius: 32px;
  background: var(--primary_01);
`;
