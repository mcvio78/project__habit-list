import { css } from 'styled-components/macro';

import { COLORS } from '../../config';

export const themeLight = css`
  body[data-theme='light'] {
    --primary_01: ${COLORS.turquoiseBlue};
    --primary_02: ${COLORS.malibu};

    --secondary_01: ${COLORS.white};
    --secondary_01_btn_hover: ${COLORS.malibu};
    --secondary_01_btn_focus: ${COLORS.white};
    --secondary_01_btn_active: ${COLORS.white};
    --secondary_01_nav_ico_active: ${COLORS.lightPurple};
    --secondary_02: ${COLORS.malibu};
    --secondary_02_btn_hover: ${COLORS.white};
    --secondary_02_btn_active: ${COLORS.azure};
    --secondary_03: transparent;
    --secondary_04: ${COLORS.ghost};
    --secondary_04_cbox_checked: ${COLORS.azure};
    --secondary_05: ${COLORS.cerulean};

    --accent_01: ${COLORS.tealBlue};
    --accent_01_btn_hover: ${COLORS.white};
    --accent_01_btn_focus: ${COLORS.tealBlue};
    --accent_01_btn_active: ${COLORS.azure};
    --accent_02: ${COLORS.white};
    --accent_02_btn_hover: ${COLORS.azure};
    --accent_02_btn_focus: ${COLORS.white};
    --accent_02_btn_active: ${COLORS.azure};
    --accent_03: ${COLORS.egyptianBlue};
    --accent_03_btn_hover: ${COLORS.white};
    --accent_03_btn_focus: ${COLORS.egyptianBlue};
    --accent_03_btn_active: ${COLORS.white};
    --accent_04_inp_active: ${COLORS.tealBlue};
    --accent_05: ${COLORS.ferrariRed};

    --neutral_01: ${COLORS.white};
    --neutral_02_btn_focus: ${COLORS.gunPowder};
    --neutral_03: transparent;
    --neutral_03_btn_focus: ${COLORS.tealBlue};
    --neutral_04: transparent;
    --neutral_04_btn_focus: ${COLORS.egyptianBlue};
    --neutral_05_op025: rgba(0, 0, 0, 0.25);
    --neutral_06_hamburger_focus: rgba(0, 0, 0, 0.1);
    --neutral_07: ${COLORS.white};
    --neutral_07_nav_lk_active: ${COLORS.lightPurple};
    --neutral_08: ${COLORS.tealBlue};
    --neutral_09: ${COLORS.black};
    --neutral_10_op05: rgba(0, 0, 0, 0.5);
    --neutral_11: ${COLORS.gunPowder};
    --neutral_12: ${COLORS.stormGrey};
    --neutral_13: ${COLORS.azure};
    --neutral_14: ${COLORS.boulder};

    --semantic_error_01: ${COLORS.ferrariRed};
    --semantic_success_01: ${COLORS.lemonLime};

    background-color: var(--primary_02, white);
    color: var(--neutral_01, black);

    .app-button:not(:disabled) {
      @media (hover: hover) {
        &:hover {
          &.std-btn {
            --accent_01: var(--accent_01_btn_hover);
            --secondary_01: var(--secondary_01_btn_hover);
          }

          &.flat-btn {
            --accent_02: var(--accent_02_btn_hover);
            --secondary_02: var(--secondary_02_btn_hover);
          }

          &.text-btn {
            --accent_03: var(--accent_03_btn_hover);
            --secondary_03: var(--secondary_03);
          }

          &.alert-btn {
            --accent_02: var(--neutral_09);
          }

          transition: background 1s ease, color 0.2s linear;
        }
      }

      &:focus {
        --accent_01: var(--accent_01_btn_focus);
        --secondary_01: var(--secondary_01_btn_focus);
        --neutral_02: var(--neutral_02_btn_focus);

        --accent_02: var(--accent_02_btn_focus);
        --secondary_02: var(--secondary_02_btn_focus);
        --neutral_03: var(--neutral_03_btn_focus);

        --accent_03: var(--accent_03_btn_focus);
        --secondary_03: var(--secondary_03);
        --neutral_04: var(--neutral_04);

        transition: all 0.6s ease, color 0.5s linear;
      }

      &:active {
        --accent_01: var(--accent_01_btn_active);
        --secondary_01: var(--secondary_01_btn_active);

        --accent_02: var(--accent_02_btn_active);
        --secondary_02: var(--secondary_02_btn_active);

        --accent_03: var(--accent_03_btn_active);
        --secondary_03: var(--secondary_03);

        transition: background, color 0.3s ease, color 0.7s linear;
      }
    }

    .hamburger-button:not(:disabled) {
      &:focus {
        --neutral_06: var(--neutral_06_hamburger_focus);
      }
    }

    .navigation-link {
      &:active {
        --neutral_07: var(--neutral_07_nav_lk_active);
      }
    }

    .navigation-icon {
      &:active {
        --secondary_01: var(--secondary_01_nav_ico_active);
      }
    }

    .input-wrapper {
      @media (hover: hover) {
        &:hover {
          --accent_04: var(--accent_04_inp_active);
        }
      }
    }

    .checkbox {
      &:checked {
        --secondary_04: var(--secondary_04_cbox_checked);
      }
    }
  }
`;
