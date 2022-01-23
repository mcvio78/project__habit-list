import { css } from 'styled-components/macro';

import { BREAKPOINTS } from '../../config/constants';

export const buttonSize = css`
  button {
    --btn-sm-mw: 24px;
    --btn-sm-mh: 12px;
    --btn-sm-p: 6px 10px;
    --btn-sm-br: 2px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      --btn-sm-mw: 32px;
      --btn-sm-mh: 16px;
      --btn-sm-p: 8px 12px;
      --btn-sm-br: 4px;
    }

    --btn-md-mw: 48px;
    --btn-md-mh: 24px;
    --btn-md-p: 10px 14px;
    --btn-md-br: 2px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      --btn-md-mw: 64px;
      --btn-md-mh: 32px;
      --btn-md-p: 12px 16px;
      --btn-md-br: 6px;
    }

    --btn-lg-mw: 96px;
    --btn-lg-mh: 48px;
    --btn-lg-p: 14px 18px;
    --btn-lg-br: 4px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      --btn-lg-mw: 128px;
      --btn-lg-mh: 64px;
      --btn-lg-p: 16px 20px;
      --btn-lg-br: 10px;
    }
  }
`;
