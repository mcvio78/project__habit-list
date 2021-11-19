import { createGlobalStyle } from 'styled-components';
import { ReactNode } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;

interface GlobalProps {
  children: ReactNode;
}

export const Global = ({ children }: GlobalProps) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
