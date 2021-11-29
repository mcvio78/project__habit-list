import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { COLORS } from '../config/constants/colors';

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

  body[data-theme='light'] {
    --clr-pr-v01: ${COLORS.turquoiseBlue};
    --clr-pr-v02: ${COLORS.malibu};
    --clr-ac-v01: ${COLORS.cerulean};
    --clr-nt-v01: ${COLORS.white};
    --clr-nt-v02-rgb: ${COLORS.black_rgb};

    background-color: var(--clr-pr-v02, white);
    color: var(--clr-nt-v01, black);
  }

  body[data-theme='dark'] {
    --clr-pr-v01: ${COLORS.indigo};
    --clr-pr-v02: ${COLORS.black};
    --clr-ac-v01: ${COLORS.azure};
    --clr-nt-v01: ${COLORS.ashGrey};
    --clr-nt-v02-rgb: ${COLORS.white_rgb};

    background-color: var(--clr-pr-v02, black);
    color: var(--clr-nt-v01, white);
  }
`;
