import styled from 'styled-components/macro';

import { spacer, SpacerProps } from '../../utility/spacer';

interface ContainerProps extends SpacerProps {
  /** width CSS property (prop) */
  w?: `${number}px` | `${number}%` | 'auto';
  /** max-width CSS property (prop) */
  mxw?: `${number}px` | `${number}%` | 'auto';
  /** height CSS property (prop) */
  h?: `${number}px` | `${number}%` | 'auto';
  /** max-height CSS property (prop) */
  mxh?: `${number}px` | `${number}%` | 'auto';
  /** box-sizing CSS property (prop) */
  bs?: 'content-box' | 'border-box';
  /** display CSS property (prop) */
  d?: 'flex' | 'inline-flex';
  /** flex-direction CSS property (prop) */
  fd?: 'row' | 'column';
  /** align-items CSS property (prop) */
  ai?: 'flex-start' | 'flex-end' | 'stretch' | 'center';
  /** justify-content CSS property (prop) */
  jc?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  /** align-self [if children] CSS property (prop) */
  as?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** flex-grow CSS property (prop) */
  fg?: 0 | 1 | 2 | 3;
  /** flex-shrink CSS property (prop) */
  fs?: 0 | 1 | 2 | 3;
  /** flex-basis CSS property (prop) */
  fb?: 'auto' | `${number}px` | `${number}%` | 0;
  /** flex-order CSS property (prop) */
  o?: number;
  /** flex-wrap CSS property (prop) */
  fw?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** align-content [if children] CSS property (prop) */
  ac?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between';
}

export const Container = styled.div<ContainerProps>`
  width: ${({ w }) => w || '100%'};
  max-width: ${({ mxw }) => mxw};
  height: ${({ h }) => h};
  box-sizing: ${({ bs }) => bs};
  display: ${({ d }) => d || 'flex'};
  flex-direction: ${({ fd }) => fd};
  align-items: ${({ ai }) => ai};
  justify-content: ${({ jc }) => jc};
  align-self: ${({ as }) => as};
  flex-grow: ${({ fg }) => fg};
  flex-shrink: ${({ fs }) => fs};
  flex-basis: ${({ fb }) => fb};
  order: ${({ o }) => o};
  flex-wrap: ${({ fw }) => fw};
  align-content: ${({ ac }) => ac};
  ${spacer};
`;
