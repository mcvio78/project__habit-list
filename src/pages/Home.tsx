import styled from 'styled-components';

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin: 20px 0;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.light.primary};
`;
