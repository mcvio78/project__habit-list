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

    --btn-n-bk: ${COLORS.white};
    --btn-n-bk-h: ${COLORS.malibu};
    --btn-n-bk-a: ${COLORS.white};
    --btn-n-bk-f: ${COLORS.white};
    --btn-n-cl: ${COLORS.tealBlue};
    --btn-n-cl-h: ${COLORS.white};
    --btn-n-cl-a: ${COLORS.azure};
    --btn-n-cl-f: ${COLORS.tealBlue};
    --btn-n-ol-f: ${COLORS.gunPowder};

    --btn-h-bk: ${COLORS.malibu};
    --btn-h-bk-h: ${COLORS.white};
    --btn-h-bk-a: ${COLORS.azure};
    --btn-h-bk-f: ${COLORS.azure};
    --btn-h-cl: ${COLORS.white};
    --btn-h-cl-h: ${COLORS.azure};
    --btn-h-cl-a: ${COLORS.white};
    --btn-h-cl-f: ${COLORS.cinder};
    --btn-h-ol-f: ${COLORS.white};

    --btn-t-bk: transparent;
    --btn-t-bk-h: transparent;
    --btn-t-bk-a: transparent;
    --btn-t-bk-f: transparent;
    --btn-t-cl: ${COLORS.egyptianBlue};
    --btn-t-cl-h: ${COLORS.white};
    --btn-t-cl-a: ${COLORS.white};
    --btn-t-cl-f: ${COLORS.egyptianBlue};
    --btn-t-ol-f: ${COLORS.egyptianBlue};

    --nvl-n-cl: inherit;
    --nvl-n-cl-a: ${COLORS.lightPurple};

    background-color: var(--clr-pr-v02, white);
    color: var(--clr-nt-v01, black);
  }
`;
