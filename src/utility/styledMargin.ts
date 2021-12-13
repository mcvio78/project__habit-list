import { css } from 'styled-components/macro';

import { BreakPointsProps, SpaceValue } from '../helpers/globalTypes';
import { BREAKPOINTS } from '../config/constants/breakpoints';

export interface StyledMarginProps {
  /** Margin - shorthand */
  m?: BreakPointsProps<
    | SpaceValue
    | `${SpaceValue} ${SpaceValue}`
    | `${SpaceValue} ${SpaceValue} ${SpaceValue}`
    | `${SpaceValue} ${SpaceValue} ${SpaceValue} ${SpaceValue}`
  >;
  /** Margin top - individual */
  mt?: BreakPointsProps<SpaceValue>;
  /** Margin right - individual */
  mr?: BreakPointsProps<SpaceValue>;
  /** Margin bottom - individual */
  mb?: BreakPointsProps<SpaceValue>;
  /** Margin left - individual */
  ml?: BreakPointsProps<SpaceValue>;
}

const styleBreakpointProps = (
  breakpointSize: string,
  propName: keyof BreakPointsProps<void>,
) =>
  css<StyledMarginProps>`
    @media screen and (min-width: ${breakpointSize}) {
      margin: ${({ m }) => m?.[propName]};
      margin-top: ${({ mt }) => mt?.[propName]};
      margin-right: ${({ mr }) => mr?.[propName]};
      margin-bottom: ${({ mb }) => mb?.[propName]};
      margin-left: ${({ ml }) => ml?.[propName]};
    }
  `;

export const styledMargin = () => css`
  ${styleBreakpointProps(BREAKPOINTS.de, 'de')};
  ${styleBreakpointProps(BREAKPOINTS.xs, 'xs')};
  ${styleBreakpointProps(BREAKPOINTS.sm, 'sm')};
  ${styleBreakpointProps(BREAKPOINTS.md, 'md')};
  ${styleBreakpointProps(BREAKPOINTS.lg, 'lg')};
  ${styleBreakpointProps(BREAKPOINTS.xl, 'xl')};
`;
