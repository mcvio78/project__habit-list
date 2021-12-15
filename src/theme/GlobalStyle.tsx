import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import './fontStyles.css';
import { themeLight, themeDark } from './colorSchemes';

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
      --btn-sm-w: 100px;
      --btn-sm-h: 34px;
      --btn-sm-br: 2px;

      --btn-md-w: 148px;
      --btn-md-h: 54px;
      --btn-md-br: 5px;

      --btn-lg-w: 260px;
      --btn-lg-h: 86px;
      --btn-lg-br: 10px;

      --btn-t-p: 6px;
      --btn-t-br: 2px;
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
        color: violet;
        --nvl-n-cl: var(--nvl-n-cl-a);
      }
    }
  }

  ${themeLight}
  ${themeDark}
`;
