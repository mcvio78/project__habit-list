import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';

import './fontStyles.css';
import './breakpoints.module.scss';
import { themeLight, themeDark } from './colorSchemes';
import { buttonSize, typographySize, checkboxSize } from './elementSize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;

    @supports (font-variation-settings: normal) {
      font-family: 'Montserrat VF', sans-serif;
      font-variation-settings: 'wght' 300;
      font-optical-sizing: auto;
    }
  }

  ${themeLight}
  ${themeDark}

  body {
    ${buttonSize};
    ${typographySize};
    ${checkboxSize};
  }
`;
