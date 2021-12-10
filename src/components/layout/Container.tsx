import styled, { css } from 'styled-components/macro';

import { spacer, SpacerProps } from '../../utility/spacer';
import { BREAKPOINTS } from '../../config/constants/breakpoints';

interface BreakPointsProps<T> {
  de?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

interface ContainerProps extends SpacerProps {
  /** width CSS property (prop) */
  w?: BreakPointsProps<`${number}px` | `${number}%` | 'auto' | 0>;
  /** max-width CSS property (prop) */
  mxw?: BreakPointsProps<`${number}px` | `${number}%` | 'auto'>;
  /** height CSS property (prop) */
  h?: BreakPointsProps<`${number}px` | `${number}%` | 'auto' | 0>;
  /** max-height CSS property (prop) */
  mxh?: BreakPointsProps<`${number}px` | `${number}%` | 'auto'>;
  /** box-sizing CSS property (prop) */
  bs?: BreakPointsProps<'content-box' | 'border-box'>;
  /** display CSS property (prop) */
  d?: BreakPointsProps<'flex' | 'inline-flex'>;
  /** flex-direction CSS property (prop) */
  fd?: BreakPointsProps<'row' | 'column'>;
  /** align-items CSS property (prop) */
  ai?: BreakPointsProps<'flex-start' | 'flex-end' | 'stretch' | 'center'>;
  /** justify-content CSS property (prop) */
  jc?: BreakPointsProps<
    'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  >;
  /** align-self [if children] CSS property (prop) */
  as?: BreakPointsProps<
    'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  >;
  /** flex-grow CSS property (prop) */
  fg?: BreakPointsProps<0 | 1 | 2 | 3>;
  /** flex-shrink CSS property (prop) */
  fs?: BreakPointsProps<0 | 1 | 2 | 3>;
  /** flex-basis CSS property (prop) */
  fb?: BreakPointsProps<'auto' | `${number}px` | `${number}%` | 0>;
  /** flex-order CSS property (prop) */
  o?: BreakPointsProps<number>;
  /** flex-wrap CSS property (prop) */
  fw?: BreakPointsProps<'nowrap' | 'wrap' | 'wrap-reverse'>;
  /** align-content [if children] CSS property (prop) */
  ac?: BreakPointsProps<
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
  >;
}

const styleBreakpointProps = (
  breakpointSize: string,
  propName: keyof BreakPointsProps<void>,
) =>
  css<ContainerProps>`
    @media screen and (min-width: ${breakpointSize}) {
      width: ${({ w }) => w?.[propName]};
      max-width: ${({ mxw }) => mxw?.[propName]};
      height: ${({ h }) => h?.[propName]};
      box-sizing: ${({ bs }) => bs?.[propName]};
      display: ${({ d }) => d?.[propName]};
      flex-direction: ${({ fd }) => fd?.[propName]};
      align-items: ${({ ai }) => ai?.[propName]};
      justify-content: ${({ jc }) => jc?.[propName]};
      align-self: ${({ as }) => as?.[propName]};
      flex-grow: ${({ fg }) => fg?.[propName]};
      flex-shrink: ${({ fs }) => fs?.[propName]};
      flex-basis: ${({ fb }) => fb?.[propName]};
      order: ${({ o }) => o?.[propName]};
      flex-wrap: ${({ fw }) => fw?.[propName]};
      align-content: ${({ ac }) => ac?.[propName]};
    }
  `;

export const Container = styled.div<ContainerProps>`
  width: ${'100%'};
  display: ${'flex'};
  ${styleBreakpointProps(BREAKPOINTS.de, 'de')};
  ${styleBreakpointProps(BREAKPOINTS.xs, 'xs')};
  ${styleBreakpointProps(BREAKPOINTS.sm, 'sm')};
  ${styleBreakpointProps(BREAKPOINTS.md, 'md')};
  ${styleBreakpointProps(BREAKPOINTS.lg, 'lg')};
  ${styleBreakpointProps(BREAKPOINTS.xl, 'xl')};
  ${spacer};
`;
