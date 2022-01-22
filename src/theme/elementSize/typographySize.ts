import { css } from 'styled-components/macro';

import { BREAKPOINTS } from '../../config/constants';

export const typographySize = css`
  h1 {
    /* display */
    --typ-d-1-fs: 28px;
    --typ-d-1-lh: 36px;
    --typ-d-1-ls: -0.6px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      --typ-d-1-fs: 48px;
      --typ-d-1-lh: 56px;
      --typ-d-1-ls: -1px;
    }

    --typ-d-2-fs: 28px;
    --typ-d-2-lh: 36px;
    --typ-d-2-ls: -0.6px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      --typ-d-2-fs: 39px;
      --typ-d-2-lh: 48px;
      --typ-d-2-ls: -0.8px;
    }

    --typ-d-3-fs: 28px;
    --typ-d-3-lh: 36px;
    --typ-d-3-ls: -0.6px;

    /* heading */
    --typ-h-xl-fs: 20px;
    --typ-h-xl-lh: 24px;
    --typ-h-xl-ls: -0.2px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      --typ-h-xl-fs: 31px;
      --typ-h-xl-lh: 36px;
      --typ-h-xl-ls: -0.6px;
    }

    --typ-h-lg-fs: 20px;
    --typ-h-lg-lh: 24px;
    --typ-h-lg-ls: -0.2px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      --typ-h-lg-fs: 25px;
      --typ-h-lg-lh: 32px;
      --typ-h-lg-ls: -0.4px;
    }

    --typ-h-md-fs: 20px;
    --typ-h-md-lh: 24px;
    --typ-h-md-ls: -0.2px;

    --typ-h-sm-fs: 16px;
    --typ-h-sm-lh: 20px;

    --typ-h-xs-fs: 16px;
    --typ-h-xs-lh: 20px;
  }

  p {
    /* paragraph */
    --typ-p-lg-fs: 20px;
    --typ-p-lg-lh: 24px;

    --typ-p-md-fs: 16px;
    --typ-p-md-lh: 20px;

    --typ-p-sm-fs: 14px;
    --typ-p-sm-lh: 16px;

    --typ-p-xs-fs: 12px;
    --typ-p-xs-lh: 16px;
  }

  a {
    /* paragraph link */
    --typ-ln-lg-fs: 20px;
    --typ-ln-lg-lh: 24px;

    --typ-ln-md-fs: 16px;
    --typ-ln-md-lh: 20px;

    --typ-ln-sm-fs: 14px;
    --typ-ln-sm-lh: 16px;

    --typ-ln-xs-fs: 12px;
    --typ-ln-xs-lh: 16px;

    /* svg icon */
    --nvi-w: 36px;
    --nvi-h: 36px;
  }

  span {
    /* span */
    --typ-spn-lg-fs: 20px;
    --typ-spn-lg-lh: 24px;

    --typ-spn-md-fs: 16px;
    --typ-spn-md-lh: 20px;

    --typ-spn-sm-fs: 14px;
    --typ-spn-sm-lh: 16px;
  }

  label {
    /* label */
    --typ-lbl-lg-fs: 20px;
    --typ-lbl-lg-lh: 24px;

    --typ-lbl-md-fs: 16px;
    --typ-lbl-md-lh: 20px;

    --typ-lbl-sm-fs: 14px;
    --typ-lbl-sm-lh: 16px;
  }

  button {
    /* button label */
    --btn-lbl-lg-fs: 20px;
    --btn-lbl-lg-lh: 24px;

    --btn-lbl-md-fs: 16px;
    --btn-lbl-md-lh: 20px;

    --btn-lbl-sm-fs: 14px;
    --btn-lbl-sm-lh: 16px;
  }
`;
