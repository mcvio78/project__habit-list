import { css } from 'styled-components';

import { COLORS } from '../../config/constants';

export const themeLight = css`
  body[data-theme='light'] {
    --clr-pr-v01: ${COLORS.turquoiseBlue};
    --clr-pr-v02: ${COLORS.malibu};
    --clr-ac-v01: ${COLORS.tealBlue};
    --clr-ac-v02: ${COLORS.white};
    --clr-ac-v03-rgb: ${COLORS.black_rgb};
    --clr-ac-v04-d: ${COLORS.white};
    --clr-ac-v04-h: ${COLORS.white};
    --clr-ac-v04-a: ${COLORS.tealBlue};
    --clr-se-v01: ${COLORS.white};
    --clr-se-v02: ${COLORS.malibu};
    --clr-nt-v01: ${COLORS.white};
    --clr-nt-v02-rgb: ${COLORS.black_rgb};

    background-color: var(--clr-pr-v02, white);
    color: var(--clr-nt-v01, black);

    button {
      --btn-n-bk: ${COLORS.white};
      --btn-n-cl: ${COLORS.tealBlue};

      --btn-h-bk: ${COLORS.malibu};
      --btn-h-cl: ${COLORS.white};

      --btn-t-bk: transparent;
      --btn-t-cl: ${COLORS.egyptianBlue};
    }

    button:not(:disabled) {
      @media (hover: hover) {
        &:hover {
          --btn-n-bk: ${COLORS.malibu};
          --btn-n-cl: ${COLORS.white};

          --btn-h-bk: ${COLORS.white};
          --btn-h-cl: ${COLORS.azure};

          --btn-t-bk: transparent;
          --btn-t-cl: ${COLORS.white};

          transition: background 1s ease, color 0.2s linear;
        }
      }

      &:focus {
        --btn-n-bk: ${COLORS.white};
        --btn-n-cl: ${COLORS.tealBlue};
        --btn-n-ol: ${COLORS.gunPowder};

        --btn-h-bk: ${COLORS.azure};
        --btn-h-cl: ${COLORS.white};
        --btn-h-ol: ${COLORS.white};

        --btn-t-bk: transparent;
        --btn-t-cl: ${COLORS.egyptianBlue};
        --btn-t-ol: ${COLORS.egyptianBlue};

        transition: all 0.6s ease, color 0.5s linear;
      }

      &:active {
        --btn-n-bk: ${COLORS.white};
        --btn-n-cl: ${COLORS.azure};

        --btn-h-bk: ${COLORS.azure};
        --btn-h-cl: ${COLORS.white};

        --btn-t-bk: transparent;
        --btn-t-cl: ${COLORS.white};

        box-shadow: 0 1px 1px rgba(var(--clr-nt-v02-rgb), 0.25);

        transition: background, color 0.3s ease, color 0.7s linear;
      }
    }

    a {
      --nvl-n-cl: inherit;

      &:active {
        --nvl-n-cl: ${COLORS.lightPurple};
      }
    }
  }
`;
