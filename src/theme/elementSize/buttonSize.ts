import { css } from 'styled-components/macro';

import { BREAKPOINTS } from '../../config/constants';

export const buttonSize = css`
  button {
    --btn-sm-mw: 24px;
    --btn-sm-mh: 12px;
    --btn-sm-p: 6px 10px;
    --btn-sm-br: 4px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      --btn-sm-mw: 32px;
      --btn-sm-mh: 16px;
      --btn-sm-p: 8px 12px;
      --btn-sm-br: 6px;
    }

    --btn-md-mw: 48px;
    --btn-md-mh: 24px;
    --btn-md-p: 10px 14px;
    --btn-md-br: 6px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      --btn-md-mw: 64px;
      --btn-md-mh: 32px;
      --btn-md-p: 12px 16px;
      --btn-md-br: 8px;
    }

    --btn-lg-mw: 96px;
    --btn-lg-mh: 48px;
    --btn-lg-p: 14px 18px;
    --btn-lg-br: 8px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      --btn-lg-mw: 128px;
      --btn-lg-mh: 64px;
      --btn-lg-p: 16px 20px;
      --btn-lg-br: 10px;
    }

    &.button-icon {
      --btn-icon-w: 24px;
      --btn-icon-h: 24px;

      @media screen and (min-width: ${BREAKPOINTS.sm}) {
        --btn-icon-w: 32px;
        --btn-icon-h: 32px;
      }
    }

    &.button-habit-status {
      --btn-hab-stat-w: 22px;
      --btn-hab-stat-h: 22px;

      @media screen and (min-width: ${BREAKPOINTS.sm}) {
        --btn-hab-stat-w: 28px;
        --btn-hab-stat-h: 28px;
      }
    }
  }
`;
