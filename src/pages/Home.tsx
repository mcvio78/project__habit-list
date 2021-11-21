import styled from 'styled-components';

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  align-items: center;
  margin: 20px 0;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.light.primary};
`;

export const TestText = styled.p`
  font-weight: 900;
  color: ${'white'};
  font-style: italic;
`;
