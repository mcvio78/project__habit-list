import { css } from 'styled-components';

import { COLORS } from '../../config/constants/colors';

export const themeDark = css`
  body[data-theme='dark'] {
    --clr-pr-v01: ${COLORS.cinder};
    --clr-pr-v02: ${COLORS.bleachedCedar};
    --clr-ac-v01: ${COLORS.brightLavender};
    --clr-ac-v01-h: ${COLORS.greenWhite};
    --clr-ac-v01-a: ${COLORS.brightLavender};
    --clr-ac-v02-d: null;
    --clr-ac-v02-f: ${COLORS.white};
    --clr-ac-v03-rgb: ${COLORS.white_rgb};
    --clr-se-v01: ${COLORS.gunPowder};
    --clr-se-v01-d: ${COLORS.gunPowder};
    --clr-se-v01-h: ${COLORS.bleachedCedar};
    --clr-se-v01-a: ${COLORS.white};
    --clr-se-v01-f: ${COLORS.stormGrey};
    --clr-nt-v01: ${COLORS.silverChalice};
    --clr-nt-v02-rgb: ${COLORS.black_rgb};

    background-color: var(--clr-pr-v02, black);
    color: var(--clr-nt-v01, white);
  }
`;
