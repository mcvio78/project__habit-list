import { css } from 'styled-components/macro';

import { BREAKPOINTS } from '../../config';

export const checkboxSize = css`
  input.checkbox {
    --cbox-w: 22px;
    --cbox-h: 22px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      --cbox-w: 24px;
      --cbox-h: 24px;
    }
  }
`;
