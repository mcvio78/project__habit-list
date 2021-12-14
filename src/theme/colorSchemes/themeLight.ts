import { css } from 'styled-components';

import { COLORS } from '../../config/constants/colors';

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
  }
`;
