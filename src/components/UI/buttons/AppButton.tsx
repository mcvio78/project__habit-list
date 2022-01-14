import { MouseEvent } from 'react';
import styled, { css } from 'styled-components/macro';
import { FormikHandlers } from 'formik';

import { Button, ButtonProps } from './Button';

export interface AppButtonProps extends ButtonProps {
  /** button size small  */
  $sm?: boolean;
  /** button size medium  */
  $md?: boolean;
  /** button size large  */
  $lg?: boolean;
  /** button variant standard */
  $std?: boolean;
  /** button variant flat */
  $flat?: boolean;
  /** button variant text */
  $text?: boolean;
  /** button event listener */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | FormikHandlers;
}

const stdBtnCSS = css`
  color: var(--accent_01);
  background-color: var(--secondary_01);
  outline: var(--neutral_02) 1px solid;
`;

const flatBtnCSS = css`
  color: var(--accent_02);
  background-color: var(--secondary_02);
  outline: var(--neutral_03) 1px solid;
`;

const textBtnCSS = css`
  color: inherit;
  background-color: transparent;
  outline: var(--neutral_03) 1px solid;
`;

const largeBtnCSS = css`
  min-width: var(--btn-lg-mw);
  min-height: var(--btn-lg-mh);
  padding: var(--btn-lg-p);
  border-radius: var(--btn-lg-br);
  font-size: var(--btn-lbl-lg-fs);
  line-height: var(--btn-lbl-lg-lh);
`;

const mediumBtnCSS = css`
  min-width: var(--btn-md-mw);
  min-height: var(--btn-md-mh);
  padding: var(--btn-md-p);
  border-radius: var(--btn-md-br);
  font-size: var(--btn-lbl-md-fs);
  line-height: var(--btn-lbl-md-lh);
`;

const smallBtnCSS = css`
  min-width: var(--btn-sm-mw);
  min-height: var(--btn-sm-mh);
  padding: var(--btn-sm-p);
  border-radius: var(--btn-sm-br);
  font-size: var(--btn-lbl-sm-fs);
  line-height: var(--btn-lbl-sm-lh);
`;

export const AppButton = styled(Button).attrs({
  className: 'dynamic-button',
})<AppButtonProps>`
  ${props => {
    if (props.$std) return `${stdBtnCSS}`;
    if (props.$flat) return `${flatBtnCSS}`;
    if (props.$text) return `${textBtnCSS}`;
  }};

  ${props => {
    if (props.$sm && !props.$text) return `${smallBtnCSS}`;
    if (props.$md && !props.$text) return `${mediumBtnCSS}`;
    if (props.$lg && !props.$text) return `${largeBtnCSS}`;
  }};
`;
