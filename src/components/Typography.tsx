import styled, { css } from 'styled-components/macro';

interface CommonStyleProps {
  shadow?: boolean;
  italic?: boolean;
}

const CommonStyle = css<CommonStyleProps>`
  margin: 0;
  ${({ shadow }) =>
    shadow && `text-shadow: 0 4px 4px rgba(var(--clr-nt-v02-rgb), 0.25)`};
  ${({ italic }) => italic && `font-style: italic`};
`;

const CommonDisplay = css`
  ${CommonStyle};
  text-align: center;
`;

const CommonParagraph = css`
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
