import { css } from 'styled-components';

import { COLORS } from '../../config/constants/colors';

export const themeLight = css`
  body[data-theme='light'] {
    --clr-pr-v01: ${COLORS.turquoiseBlue};
    --clr-pr-v02: ${COLORS.malibu};
    --clr-ac-v01-d: ${COLORS.tealBlue};
    --clr-ac-v01-h: ${COLORS.white};
    --clr-ac-v01-a: ${COLORS.tealBlue};
    --clr-ac-v02-d: null;
    --clr-ac-v02-f: ${COLORS.white};
    --clr-ac-v03-rgb: ${COLORS.black_rgb};
    --clr-se-v01: ${COLORS.white};
    --clr-se-v01-d: ${COLORS.white};
    --clr-se-v01-h: ${COLORS.malibu};
    --clr-se-v01-a: ${COLORS.white};
    --clr-se-v01-f: ${COLORS.greenWhite};
    --clr-nt-v01: ${COLORS.white};
    --clr-nt-v02-rgb: ${COLORS.black_rgb};

    background-color: var(--clr-pr-v02, white);
    color: var(--clr-nt-v01, black);
  }
`;
