import styled from 'styled-components/macro';

import { ButtonBasic, ButtonBasicProps } from './ButtonBasic';

interface VariantButtonProps extends ButtonBasicProps {
  /** button size small  */
  sm?: boolean;
  /** button size medium  */
  md?: boolean;
  /** button size large  */
  lg?: boolean;
  /** button variant normal */
  nb?: boolean;
  /** button variant hollow */
  hb?: boolean;
  /** button variant text */
  tb?: boolean;
}

export const Button = styled(ButtonBasic)<VariantButtonProps>`
  ${props => {
    if (props.sm && !props.tb)
      return `width: var(--btn-sm-w);
      height: var(--btn-sm-h);
      border-radius: var(--btn-sm-br);
      `;
    if (props.md && !props.tb)
      return `width: var(--btn-md-w);
      height: var(--btn-md-h);
      border-radius: var(--btn-md-br);
      `;
    if (props.lg && !props.tb)
      return `width: var(--btn-lg-w);
      height: var(--btn-lg-h);
      border-radius: var(--btn-lg-br);
      `;
    return `width: auto; height: auto;`;
  }};
  ${props => {
    if (props.nb)
      return `color: var(--btn-n-cl);
      background-color: var(--btn-n-bk);
      outline: var(--btn-n-ol) 1px solid;
      `;
    if (props.hb)
      return `color: var(--btn-h-cl);
      background-color: var(--btn-h-bk);
      outline: var(--btn-h-ol) 1px solid;
      `;
    if (props.tb)
      return `color: var(--btn-t-cl);
      background-color: var(--btn-t-bk);
      outline: var(--btn-t-ol) 1px solid;
      padding: var(--btn-t-p);
      border-radius: var(--btn-t-br);
      `;
  }};
`;
