import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { fontStyles } from './fontStyles';
import { COLORS } from '../config/constants/colors';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fontStyles}

  html {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;

    @supports (font-variation-settings: normal) {
      font-family: 'Montserrat VF', sans-serif;
      font-variation-settings: 'wght' 300;
    }
  }

  body[data-theme='light'] {
    --colors-primary: ${COLORS.turquoiseBlue};
    --colors-primary_variant: ${COLORS.malibu};
    --colors-text: ${COLORS.white};
    --shadow-text-rgb: ${COLORS.black_rgb};

    background-color: var(--colors-primary_variant, white);
    color: var(--colors-text, black);
  }

  body[data-theme='dark'] {
    --colors-primary: ${COLORS.indigo};
    --colors-primary_variant: ${COLORS.black};
    --colors-text: ${COLORS.lightPurple};
    --shadow-text-rgb: ${COLORS.white_rgb};

    background-color: var(--colors-primary_variant, black);
    color: var(--colors-text, white);
  }
`;
