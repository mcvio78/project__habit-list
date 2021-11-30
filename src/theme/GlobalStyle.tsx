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
    --clr-se-v01: ${COLORS.white};
    --clr-se-v01-f: ${COLORS.greenWhite};
    --clr-se-v01-h: ${COLORS.egyptianBlue};
    --clr-ac-v01: ${COLORS.cerulean};
    --clr-ac-v01-h: ${COLORS.white};
    --clr-ac-v02: ${COLORS.egyptianBlue};
    --clr-ac-v03: ${COLORS.black};
    --clr-nt-v01: ${COLORS.white};
    --clr-nt-v02-rgb: ${COLORS.black_rgb};

    button:disabled {
      opacity: 0.6;
      filter: saturate(60%);
      user-select: none;
      cursor: not-allowed;
    }

    button:not(:disabled) {
      &:focus {
        transition: background 0.1s ease;
        --clr-se-v01: var(--clr-se-v01-f);
      }

      @media (hover: hover) {
        &:hover {
          transition: background 0.5s ease,
          color 1s linear;
          --clr-ac-v01: var(--clr-nt-v01-h);
          --clr-se-v01: var(--clr-se-v01-h);
        }
      }

      &:active {
        transition: background 0.1s ease,
        color 0.1s linear;
        --clr-ac-v01: ${COLORS.cerulean};
        --clr-se-v01: ${COLORS.white};
      }
    }

    background-color: var(--clr-pr-v02, white);
    color: var(--clr-nt-v01, black);
  }

  body[data-theme='dark'] {
    --clr-pr-v01: ${COLORS.indigo};
    --clr-pr-v02: ${COLORS.black};
    --clr-se-v01: ${COLORS.black};
    --clr-ac-v01: ${COLORS.azure};
    --clr-ac-v02: ${COLORS.brightLavender};
    --clr-ac-v03: ${COLORS.white};
    --clr-nt-v01: ${COLORS.greenWhite};
    --clr-nt-v02-rgb: ${COLORS.white_rgb};

    background-color: var(--clr-pr-v02, black);
    color: var(--clr-nt-v01, white);
  }
`;
