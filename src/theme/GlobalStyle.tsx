import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import './fontStyles.css';
import { themeLight, themeDark } from './colorSchemes';
import { DIMENSIONS } from '../config/constants/dimensions';

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

  body {
    button {
      --btn-sm-w: ${DIMENSIONS.btn.size.sm.w};
      --btn-sm-h: ${DIMENSIONS.btn.size.sm.h};
      --btn-sm-br: ${DIMENSIONS.btn.size.sm.br};

      --btn-md-w: ${DIMENSIONS.btn.size.md.w};
      --btn-md-h: ${DIMENSIONS.btn.size.md.h};
      --btn-md-br: ${DIMENSIONS.btn.size.md.br};

      --btn-lg-w: ${DIMENSIONS.btn.size.lg.w};
      --btn-lg-h: ${DIMENSIONS.btn.size.lg.h};
      --btn-lg-br: ${DIMENSIONS.btn.size.lg.br};

      --btn-t-p: ${DIMENSIONS.btn.type.t.p};
      --btn-t-br: ${DIMENSIONS.btn.type.t.br};
    }

    button:not(:disabled) {
      @media (hover: hover) {
        &:hover {
          transition: background 1s ease, color 0.2s linear;
          --btn-n-cl: var(--btn-n-cl-h);
          --btn-n-bk: var(--btn-n-bk-h);
          --btn-h-cl: var(--btn-h-cl-h);
          --btn-h-bk: var(--btn-h-bk-h);
          --btn-t-cl: var(--btn-t-cl-h);
          --btn-t-bk: var(--btn-t-bk-h);
        }
      }

      &:focus {
        transition: background 0.9s ease, color 0.5s linear;
        --btn-n-cl: var(--btn-n-cl-f);
        --btn-n-bk: var(--btn-n-bk-f);
        --btn-n-ol: var(--btn-n-ol-f);
        --btn-h-cl: var(--btn-h-cl-f);
        --btn-h-bk: var(--btn-h-bk-f);
        --btn-h-ol: var(--btn-h-ol-f);
        --btn-t-cl: var(--btn-t-cl-f);
        --btn-t-bk: var(--btn-t-bk-f);
        --btn-t-ol: var(--btn-t-ol-f);
      }

      &:active {
        transition: background, color 0.3s ease, color 0.7s linear;
        --btn-n-cl: var(--btn-n-cl-a);
        --btn-n-bk: var(--btn-n-bk-a);
        --btn-h-cl: var(--btn-h-cl-a);
        --btn-h-bk: var(--btn-h-bk-a);
        --btn-t-cl: var(--btn-t-cl-a);
        --btn-t-bk: var(--btn-t-bk-a);
      }
    }

    a {
      &:active {
        --nvl-n-cl: var(--nvl-n-cl-a);
      }
    }
  }

  ${themeLight}
  ${themeDark}
`;
