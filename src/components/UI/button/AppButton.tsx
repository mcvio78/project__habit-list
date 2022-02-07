import { ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components/macro';

import { Button, ButtonProps } from './Button';

export interface AppButtonProps extends ButtonProps {
  $variant?: 'standard' | 'flat' | 'text' | 'alert';
  $size?: 'small' | 'medium' | 'large';
}

const stdBtnCSS = css`
  color: var(--accent_01);
  background-color: var(--secondary_01);
  outline: var(--neutral_02) 1px solid;
  box-shadow: 0 4px 4px var(--neutral_05_op025);
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
  min-width: 0 !important;
  min-height: 0 !important;
  padding: 0 !important;
  border-radius: 0 !important;
`;

const alertBtnCSS = css`
  color: var(--accent_02);
  background-color: var(--accent_05);
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

const AppButtonClassName = (props: any) => {
  if (props.$variant === 'standard') return 'app-button std-btn';
  if (props.$variant === 'flat') return 'app-button flat-btn';
  if (props.$variant === 'text') return 'app-button text-btn';
  if (props.$variant === 'alert') return 'app-button alert-btn';
  return 'app-button';
};

export const AppButton = styled(Button).attrs<
  ComponentPropsWithoutRef<'button'>
>(props => ({
  className: AppButtonClassName(props),
}))<AppButtonProps>`
  ${props => props.$variant === 'standard' && stdBtnCSS};
  ${props => props.$variant === 'flat' && flatBtnCSS};
  ${props => props.$variant === 'text' && textBtnCSS};
  ${props => props.$variant === 'alert' && alertBtnCSS};

  ${props => props.$size === 'small' && smallBtnCSS};
  ${props => props.$size === 'medium' && mediumBtnCSS};
  ${props => props.$size === 'large' && largeBtnCSS};
`;
