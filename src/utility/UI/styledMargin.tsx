import { css } from 'styled-components/macro';

import { BreakPointsProps, SpaceValue } from '../../helpers/globalTypes';
import { BREAKPOINTS } from '../../config/constants';

export interface StyledMarginProps {
  /** margin - shorthand */
  $m?: BreakPointsProps<
    | SpaceValue
    | `${SpaceValue} ${SpaceValue}`
    | `${SpaceValue} ${SpaceValue} ${SpaceValue}`
    | `${SpaceValue} ${SpaceValue} ${SpaceValue} ${SpaceValue}`
  >;
  /** margin top - individual */
  $mt?: BreakPointsProps<SpaceValue>;
  /** margin right - individual */
  $mr?: BreakPointsProps<SpaceValue>;
  /** margin bottom - individual */
  $mb?: BreakPointsProps<SpaceValue>;
  /** margin left - individual */
  $ml?: BreakPointsProps<SpaceValue>;
  /** align-self [if children] CSS property (prop) */
  $flxAs?: BreakPointsProps<
    'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  >;
}

const styleBreakpointProps = (
  breakpointSize: string,
  propName: keyof BreakPointsProps<void>,
) =>
  css<StyledMarginProps>`
    @media screen and (min-width: ${breakpointSize}) {
      margin: ${({ $m }) => $m?.[propName]};
      margin-top: ${({ $mt }) => $mt?.[propName]};
      margin-right: ${({ $mr }) => $mr?.[propName]};
      margin-bottom: ${({ $mb }) => $mb?.[propName]};
      margin-left: ${({ $ml }) => $ml?.[propName]};
      align-self: ${({ $flxAs }) => $flxAs?.[propName]};
    }
  `;

export const styledMargin = css`
  ${styleBreakpointProps(BREAKPOINTS.de, 'de')};
  ${styleBreakpointProps(BREAKPOINTS.xs, 'xs')};
  ${styleBreakpointProps(BREAKPOINTS.sm, 'sm')};
  ${styleBreakpointProps(BREAKPOINTS.md, 'md')};
  ${styleBreakpointProps(BREAKPOINTS.lg, 'lg')};
  ${styleBreakpointProps(BREAKPOINTS.xl, 'xl')};
`;
