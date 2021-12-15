import styled, { css } from 'styled-components/macro';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { styledMargin, StyledMarginProps } from '../utility/styledMargin';

export interface CommonStyleProps extends StyledMarginProps {
  /** has font text shadow? */
  txtSdw?: boolean;
  /** is font italicized type? */
  it?: boolean;
  /** overwrite default font color */
  txtClr?: string;
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
`;

// Heading

const CommonParagraph = css`
  ${CommonStyle};
`;

const CommonNavLink = css<NavLinkProps>`
  ${CommonStyle};
  text-decoration: none;
  color: var(--nvl-n-cl);

  &:hover {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
  }
`;

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

export const NavLinkLarge = styled(NavLink)`
  ${CommonNavLink};
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
