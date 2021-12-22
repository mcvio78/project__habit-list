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

export const Button = styled(ButtonBasic)<VariantButtonProps>`
  ${props => {
    if (props.$sm && !props.$tb)
      return `min-width: var(--btn-sm-mw);
      min-height: var(--btn-sm-mh);
      padding: var(--btn-sm-p);
      border-radius: var(--btn-sm-br);
      `;
    if (props.$md && !props.$tb)
      return `min-width: var(--btn-md-mw);
      min-height: var(--btn-md-mh);
      padding: var(--btn-md-p);
      border-radius: var(--btn-md-br);
      `;
    if (props.$lg && !props.$tb)
      return `min-width: var(--btn-lg-mw);
      min-height: var(--btn-lg-mh);
      padding: var(--btn-lg-p);
      border-radius: var(--btn-lg-br);
      `;
    return `width: auto; height: auto;`;
  }};

  ${props => {
    if (props.$nb)
      return `color: var(--btn-n-cl);
      background-color: var(--btn-n-bk);
      outline: var(--btn-n-ol) 1px solid;
      `;
    if (props.$hb)
      return `color: var(--btn-h-cl);
      background-color: var(--btn-h-bk);
      outline: var(--btn-h-ol) 1px solid;
      box-shadow: none;
      `;
    if (props.$tb)
      return `color: var(--btn-t-cl);
      background-color: var(--btn-t-bk);
      outline: var(--btn-t-ol) 1px solid;
      box-shadow: none;
      `;
  }};
`;
