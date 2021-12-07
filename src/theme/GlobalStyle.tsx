import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import './fontStyles.css';
import { themeLight, themeDark } from './colorSchemes';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  html {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;

    @supports (font-variation-settings: normal) {
      font-family: 'Montserrat VF', sans-serif;
      font-variation-settings: 'wght' 300;
    }
  }

  button:disabled {
    opacity: 0.6;
    filter: saturate(60%);
    user-select: none;
    cursor: not-allowed;
  }

  button:not(:disabled) {
    @media (hover: hover) {
      &:hover {
        transition: background 1s ease, color 0.2s linear;
        --clr-ac-v01-d: var(--clr-ac-v01-h);
        --clr-se-v01-d: var(--clr-se-v01-h);
      }
    }

    &:focus {
      transition: background 0.9s ease, color 0.2s linear;
      --clr-se-v01-d: var(--clr-se-v01-f);
      --clr-ac-v02-d: var(--clr-ac-v02-f);
    }

    &:active {
      transition: background, color 0.3s ease, color 0.1s linear;
      --clr-ac-v01-d: var(--clr-ac-v01-a);
      --clr-se-v01-d: var(--clr-se-v01-a);
    }
  }

  ${themeLight}
  ${themeDark}
`;
