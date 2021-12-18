import styled, { css } from 'styled-components/macro';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { styledMargin, StyledMarginProps } from '../utility/styledMargin';

export interface CommonStyleProps extends StyledMarginProps {
  /** font text shadow */
  txtSdw?: boolean;
  /** font italicized type */
  it?: boolean;
  /** overwrite default font color */
  txtClr?: string;
  /** font bold tag */
  b?: boolean;
  /** children prop */
  children: string | number | ReactNode;
}

interface NavLinkProps extends CommonStyleProps {
  /** NavLink active class */
  aClass?: boolean;
  /** location match */
  exact?: boolean;
}

const CommonStyle = css<CommonStyleProps>`
  margin: 0;
  text-align: center;
  color: ${({ txtClr }) => txtClr};
  text-shadow: ${({ txtSdw }) =>
    txtSdw && '0 4px 4px rgba(var(--clr-nt-v02-rgb), 0.25)'};
  font-style: ${({ it }) => it && 'italic'};
  ${styledMargin};
`;

const CommonDisplay = css`
  ${CommonStyle};
  font-variation-settings: 'wght' 700;
  font-weight: 700;
`;

const CommonHeading = css`
  ${CommonStyle};
  font-variation-settings: 'wght' 700;
  font-weight: 700;
`;

const CommonParagraph = css`
  ${CommonStyle};
  font-variation-settings: 'wght' 400;
  font-weight: 400;
`;

const CommonNavLink = css<NavLinkProps>`
  ${CommonStyle};
  font-variation-settings: 'wght' 700;
  font-weight: 700;
  text-decoration: none;
  color: var(--nvl-n-cl);

  &:hover {
    text-decoration: underline;
    text-shadow: none;
  }

  &.active {
    text-decoration: underline;
    text-shadow: none;
    cursor: text;
  }
`;

const CommonLabel = css`
  ${CommonStyle};
  font-variation-settings: ${({ b }) => (b ? `'wght' 700` : `'wght' 400`)};
  font-weight: ${({ b }) => (b ? 700 : 400)};
`;

export const Display1 = styled.h1`
  ${CommonDisplay};
  font-size: var(--typ-d-1-fs);
  line-height: var(--typ-d-1-lh);
  letter-spacing: var(--typ-d-1-ls);
`;

export const Display2 = styled.h1`
  ${CommonDisplay};
  font-size: var(--typ-d-2-fs);
  line-height: var(--typ-d-2-lh);
  letter-spacing: var(--typ-d-2-ls);
`;

export const Display3 = styled.h2`
  ${CommonDisplay};
  font-size: var(--typ-d-3-fs);
  line-height: var(--typ-d-3-lh);
  letter-spacing: var(--typ-d-3-ls);
`;

export const HeadingExtraLarge = styled.h1`
  ${CommonHeading};
  font-size: var(--typ-h-xl-fs);
  line-height: var(--typ-h-xl-lh);
  letter-spacing: var(--typ-h-xl-ls);
`;

export const HeadingLarge = styled.h1`
  ${CommonHeading};
  font-size: var(--typ-h-lg-fs);
  line-height: var(--typ-h-lg-lh);
  letter-spacing: var(--typ-h-lg-ls);
`;

export const HeadingMedium = styled.h1`
  ${CommonHeading};
  font-size: var(--typ-h-md-fs);
  line-height: var(--typ-h-md-lh);
  letter-spacing: var(--typ-h-md-ls);
`;

export const HeadingSmall = styled.h1`
  ${CommonHeading};
  font-size: var(--typ-h-sm-fs);
  line-height: var(--typ-h-sm-lh);
  letter-spacing: var(--typ-h-sm-ls);
`;

export const HeadingExtraSmall = styled.h1`
  ${CommonHeading};
  font-size: var(--typ-h-xs-fs);
  line-height: var(--typ-h-xs-lh);
  letter-spacing: var(--typ-h-xs-ls);
`;

export const ParagraphLarge = styled.p`
  ${CommonParagraph};
  font-size: var(--typ-p-lg-fs);
  line-height: var(--typ-p-lg-lh);
`;

export const ParagraphMedium = styled.p`
  ${CommonParagraph};
  font-size: var(--typ-p-md-fs);
  line-height: var(--typ-p-md-lh);
`;

export const ParagraphSmall = styled.p`
  ${CommonParagraph};
  font-size: var(--typ-p-sm-fs);
  line-height: var(--typ-p-sm-lh);
`;

export const ParagraphExtraSmall = styled.p`
  ${CommonParagraph};
  font-size: var(--typ-p-xs-fs);
  line-height: var(--typ-p-xs-lh);
`;

export const NavLinkLarge = styled(NavLink)`
  ${CommonNavLink};
  font-size: var(--typ-ln-lg-fs);
  line-height: var(--typ-ln-lg-lh);
`;

export const NavLinkMedium = styled(NavLink)`
  ${CommonNavLink};
  font-size: var(--typ-ln-md-fs);
  line-height: var(--typ-ln-md-lh);
`;

export const NavLinkSmall = styled(NavLink)`
  ${CommonNavLink};
  font-size: var(--typ-ln-sm-fs);
  line-height: var(--typ-ln-sm-lh);
`;

export const NavLinkExtraSmall = styled(NavLink)`
  ${CommonNavLink};
  font-size: var(--typ-ln-xs-fs);
  line-height: var(--typ-ln-xs-lh);
`;

export const LabelLarge = styled.span`
  ${CommonLabel};
  font-size: var(--typ-lbl-lg-fs);
  line-height: var(--typ-lbl-lg-lh);
`;

export const LabelMedium = styled.span`
  ${CommonLabel};
  font-size: var(--typ-lbl-md-fs);
  line-height: var(--typ-lbl-md-lh);
`;

export const LabelSmall = styled.span`
  ${CommonLabel};
  font-size: var(--typ-lbl-sm-fs);
  line-height: var(--typ-lbl-sm-lh);
`;
