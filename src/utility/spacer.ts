import { css } from 'styled-components/macro';
import { BREAKPOINTS } from '../config/constants/breakpoints';

interface BreakPointsProps<T> {
  de?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

type SpaceValue = `${number}px` | `${number}%` | 0 | 'auto';

export interface SpacerProps {
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
  /** Padding - shorthand */
  p?: BreakPointsProps<
    | SpaceValue
    | `${SpaceValue} ${SpaceValue}`
    | `${SpaceValue} ${SpaceValue} ${SpaceValue}`
    | `${SpaceValue} ${SpaceValue} ${SpaceValue} ${SpaceValue}`
  >;
  /** Padding top - individual */
  pt?: BreakPointsProps<SpaceValue>;
  /** Padding right - individual */
  pr?: BreakPointsProps<SpaceValue>;
  /** Padding bottom - individual */
  pb?: BreakPointsProps<SpaceValue>;
  /** Padding left - individual */
  pl?: BreakPointsProps<SpaceValue>;
}

const styleBreakpointProps = (
  breakpointSize: string,
  propName: keyof BreakPointsProps<void>,
) =>
  css<SpacerProps>`
    @media screen and (min-width: ${breakpointSize}) {
      margin: ${({ m }) => m?.[propName]};
      margin-top: ${({ mt }) => mt?.[propName]};
      margin-right: ${({ mr }) => mr?.[propName]};
      margin-bottom: ${({ mb }) => mb?.[propName]};
      margin-left: ${({ ml }) => ml?.[propName]};
      padding: ${({ p }) => p?.[propName]};
      padding-top: ${({ pt }) => pt?.[propName]};
      padding-right: ${({ pr }) => pr?.[propName]};
      padding-bottom: ${({ pb }) => pb?.[propName]};
      padding-left: ${({ pl }) => pl?.[propName]};
    }
  `;

export const spacer = () => css`
  ${styleBreakpointProps(BREAKPOINTS.de, 'de')};
  ${styleBreakpointProps(BREAKPOINTS.xs, 'xs')};
  ${styleBreakpointProps(BREAKPOINTS.sm, 'sm')};
  ${styleBreakpointProps(BREAKPOINTS.md, 'md')};
  ${styleBreakpointProps(BREAKPOINTS.lg, 'lg')};
  ${styleBreakpointProps(BREAKPOINTS.xl, 'xl')};
`;
