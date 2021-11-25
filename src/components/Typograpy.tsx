import styled, { css } from 'styled-components';

const CommonStyle = css`
  margin: 0;
`;

const CommonDisplay = css`
  ${CommonStyle};
`;

export const Display1 = styled.h1`
  ${CommonDisplay};
  line-height: 49px;
  letter-spacing: 0;
  text-align: center;
  text-shadow: 2px 2px 3px var(--colors-text_shadow-rgba);
`;
