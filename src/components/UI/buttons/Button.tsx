import styled from 'styled-components/macro';

import { ButtonBasic, ButtonBasicProps } from './ButtonBasic';

interface VariantButtonProps extends ButtonBasicProps {
  /** button size small  */
  $sm?: boolean;
  /** button size medium  */
  $md?: boolean;
  /** button size large  */
  $lg?: boolean;
  /** button variant normal */
  $nb?: boolean;
  /** button variant hollow */
  $hb?: boolean;
  /** button variant text */
  $tb?: boolean;
}

export const Button = styled(ButtonBasic).attrs({
  className: 'dynamic-button',
})<VariantButtonProps>`
  ${props => {
    if (props.$lg && !props.$tb)
      return `min-width: var(--btn-lg-mw);
      min-height: var(--btn-lg-mh);
      padding: var(--btn-lg-p);
      border-radius: var(--btn-lg-br);
      font-size: var(--btn-lbl-lg-fs);
      line-height: var(--btn-lbl-lg-lh);
      `;
    if (props.$md && !props.$tb)
      return `min-width: var(--btn-md-mw);
      min-height: var(--btn-md-mh);
      padding: var(--btn-md-p);
      border-radius: var(--btn-md-br);
      font-size: var(--btn-lbl-md-fs);
      line-height: var(--btn-lbl-md-lh);
      `;
    if (props.$sm && !props.$tb)
      return `min-width: var(--btn-sm-mw);
      min-height: var(--btn-sm-mh);
      padding: var(--btn-sm-p);
      border-radius: var(--btn-sm-br);
      font-size: var(--btn-lbl-sm-fs);
      line-height: var(--btn-lbl-sm-lh);
      `;
    return `width: auto; height: auto;`;
  }};

  ${props => {
    if (props.$nb)
      return `color: var(--accent_01);
      background-color: var(--secondary_01);
      outline: var(--neutral_02) 1px solid;
      `;
    if (props.$hb)
      return `color: var(--accent_02);
      background-color: var(--secondary_02);
      outline: var(--neutral_03) 1px solid;
      `;
    if (props.$tb)
      return `color: var(--accent_03);
      background-color: var(--secondary_03);
      outline: var(--neutral_04) 1px solid;
      `;
    return null;
  }};

  &:active {
    box-shadow: ${({ $boxSdw }) =>
      $boxSdw ? '0 1px 1px var(--neutral_05_op025)' : 'none'};
  }
`;
