import styled from 'styled-components/macro';

import { spacer, SpacerProps } from '../../utility/spacer';

interface ContainerProps extends SpacerProps {
  w?: `${number}px` | `${number}%` | 'auto';
  h?: `${number}px` | `${number}%` | 'auto';
  bs?: 'content-box' | 'border-box';
  d?: 'flex' | 'inline-flex';
  fd?: 'row' | 'column';
  ai?: 'flex-start' | 'flex-end' | 'stretch' | 'center';
  jc?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  as?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  fg?: 0 | 1 | 2 | 3;
  fs?: 0 | 1 | 2 | 3;
  fb?: 'auto' | `${number}px` | `${number}%` | 0;
  o?: number;
  fw?: 'nowrap' | 'wrap' | 'wrap-reverse';
  ac?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between';
}

export const Container = styled.div<ContainerProps>`
  width: ${({ w }) => w};
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
  ${spacer};
`;
