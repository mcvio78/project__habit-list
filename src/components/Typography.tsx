import styled, { css } from 'styled-components/macro';

import { spacer, SpacerProps } from '../utility/spacer';

export interface CommonStyleProps extends SpacerProps {
  /** Has font text shadow? */
  txtSdw?: boolean;
  /** Is font italicized type? */
  it?: boolean;
  /** Overwrite default font color */
  txtClr?: string;
}

const CommonStyle = css<CommonStyleProps>`
  margin: 0;
  text-shadow: ${({ txtSdw }) =>
    txtSdw && `0 4px 4px rgba(var(--clr-nt-v02-rgb), 0.25)`};
  font-style: ${({ it }) => it && `italic`};
  color: ${({ txtClr }) => txtClr || 'inherit'};
  ${spacer};
`;

const CommonDisplay = css`
  ${CommonStyle};
  text-align: center;
`;

// Heading

const CommonParagraph = css`
  ${CommonStyle};
`;

// Link

const CommonLabel = css`
  ${CommonStyle};
`;

export const Display1 = styled.h1`
  ${CommonDisplay};
  font-variation-settings: 'wght' 700;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.8px;
`;

export const ParagraphLarge = styled.p`
  ${CommonParagraph};
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.4px;
`;

export const LabelLarge = styled.span`
  ${CommonLabel};
  font-variation-settings: 'wght' 600;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.4px;
`;
