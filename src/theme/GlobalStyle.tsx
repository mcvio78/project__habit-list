import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import './fontStyles.css';
import { themeLight, themeDark, buttonCSS } from './colorSchemes';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;

    @supports (font-variation-settings: normal) {
      font-family: 'Montserrat VF', sans-serif;
      font-variation-settings: 'wght' 300;
    }
  }

  ${themeLight}
  ${themeDark}
  ${buttonCSS}
`;
