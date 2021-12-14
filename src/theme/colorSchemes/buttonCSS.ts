import { css } from 'styled-components';

import { COLORS } from '../../config/constants/colors';

export const buttonCSS = css`
  button {
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
    --btn-t-p: 6px;
    --btn-t-br: 2px;

    --btn-sm-w: 100px;
    --btn-sm-h: 34px;
    --btn-sm-br: 2px;

    --btn-md-w: 148px;
    --btn-md-h: 54px;
    --btn-md-br: 5px;

    --btn-lg-w: 260px;
    --btn-lg-h: 86px;
    --btn-lg-br: 10px;
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
`;
