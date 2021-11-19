import { ThemeProvider, DefaultTheme } from 'styled-components';
import { ReactNode } from 'react';

import { colors } from '../config/colors';

const theme: DefaultTheme = {
  colors,
};

interface ThemeProps {
  children: ReactNode;
}

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
