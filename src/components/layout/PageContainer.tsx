import styled from 'styled-components/macro';

interface PageContainerProps {
  bgColor?: string;
}

export const PageContainer = styled.div<PageContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;
