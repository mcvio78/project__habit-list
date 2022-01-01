import styled from 'styled-components/macro';
import { FormikHandlers } from 'formik';

import { Button, ButtonProps } from './Button';

export interface AppButtonProps extends ButtonProps {
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
  /** button event listener */
  onClick?: () => void | FormikHandlers;
}

export const AppButton = styled(Button).attrs({
  className: 'dynamic-button',
})<AppButtonProps>`
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
`;
