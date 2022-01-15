import styled, { css } from 'styled-components/macro';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { styledMargin, StyledMarginProps } from '../../utility/UI/styledMargin';

interface CommonStyleProps extends StyledMarginProps {
  /** font text shadow */
  $txtSdw?: boolean;
  /** overwrite default font color */
  $txtClr?: string;
}

export interface NavLinkCommonProps extends NavLinkProps, CommonStyleProps {
  /** aria-label attribute - required */
  'aria-label': string;
}

interface NavLinkIconProps extends NavLinkCommonProps {
  /** NavLink active class */
  $iconSdw?: boolean;
}

const CommonStyle = css<CommonStyleProps>`
  margin: 0;
  text-align: center;
  color: ${({ $txtClr }) => $txtClr};
  text-shadow: ${({ $txtSdw }) =>
    $txtSdw && '0 4px 4px var(--neutral_05_op025)'};
  ${styledMargin};
`;

const CommonDisplay = css`
  ${CommonStyle};
  font-variation-settings: 'wght' 700;
  font-weight: 700;
`;

const CommonHeading = styled.h1`
  ${CommonStyle};
  font-variation-settings: 'wght' 600;
  font-weight: 700;
`;

const CommonParagraph = styled.p`
  ${CommonStyle};
  font-variation-settings: 'wght' 300;
  font-weight: 400;
`;

const CommonNavLink = styled(NavLink).attrs({
  className: 'navigation-link',
})<NavLinkCommonProps>`
  ${CommonStyle};
  font-variation-settings: 'wght' 500;
  font-weight: 600;
  text-decoration: none;
  color: var(--neutral_07);

  &:hover {
    text-decoration: underline;
    text-shadow: none;
  }

  &.active {
    text-decoration: underline;
    text-shadow: none;
    pointer-events: none;
  }
`;

const CommonSpan = styled.span`
  ${CommonStyle};
  font-variation-settings: 'wght' 300;
  font-weight: 400;
`;

const CommonLabel = styled.label`
  ${CommonStyle};
  font-variation-settings: 'wght' 300;
  font-weight: 400;
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

export const HeadingExtraLarge = styled(CommonHeading)`
  font-size: var(--typ-h-xl-fs);
  line-height: var(--typ-h-xl-lh);
  letter-spacing: var(--typ-h-xl-ls);
`;

export const HeadingLarge = styled(CommonHeading)`
  font-size: var(--typ-h-lg-fs);
  line-height: var(--typ-h-lg-lh);
  letter-spacing: var(--typ-h-lg-ls);
`;

export const HeadingMedium = styled(CommonHeading)`
  font-size: var(--typ-h-md-fs);
  line-height: var(--typ-h-md-lh);
  letter-spacing: var(--typ-h-md-ls);
`;

export const HeadingSmall = styled(CommonHeading)`
  font-size: var(--typ-h-sm-fs);
  line-height: var(--typ-h-sm-lh);
  letter-spacing: var(--typ-h-sm-ls);
`;

export const HeadingExtraSmall = styled(CommonHeading)`
  font-size: var(--typ-h-xs-fs);
  line-height: var(--typ-h-xs-lh);
  letter-spacing: var(--typ-h-xs-ls);
`;

export const ParagraphLarge = styled(CommonParagraph)`
  font-size: var(--typ-p-lg-fs);
  line-height: var(--typ-p-lg-lh);
`;

export const ParagraphMedium = styled(CommonParagraph)`
  font-size: var(--typ-p-md-fs);
  line-height: var(--typ-p-md-lh);
`;

export const ParagraphSmall = styled(CommonParagraph)`
  font-size: var(--typ-p-sm-fs);
  line-height: var(--typ-p-sm-lh);
`;

export const ParagraphExtraSmall = styled(CommonParagraph)`
  font-size: var(--typ-p-xs-fs);
  line-height: var(--typ-p-xs-lh);
`;

export const NavLinkLarge = styled(CommonNavLink)`
  font-size: var(--typ-ln-lg-fs);
  line-height: var(--typ-ln-lg-lh);
`;

export const NavLinkMedium = styled(CommonNavLink)`
  font-size: var(--typ-ln-md-fs);
  line-height: var(--typ-ln-md-lh);
`;

export const NavLinkSmall = styled(CommonNavLink)`
  font-size: var(--typ-ln-sm-fs);
  line-height: var(--typ-ln-sm-lh);
`;

export const NavLinkExtraSmall = styled(CommonNavLink)`
  font-size: var(--typ-ln-xs-fs);
  line-height: var(--typ-ln-xs-lh);
`;

export const NavLinkIcon = styled(NavLink).attrs({
  className: 'navigation-icon',
})<NavLinkIconProps>`
  ${CommonStyle};

  &.active {
    filter: none;
    pointer-events: none;
    border-bottom: 2px solid var(--secondary_01);
  }

  svg {
    width: var(--nvi-w);
    height: var(--nvi-h);
    fill: var(--secondary_01);
    filter: ${({ $iconSdw }) =>
      $iconSdw && `drop-shadow(0 4px 4px var(--neutral_05_op025))`};

    &:hover {
      filter: none;
    }
  }
`;

export const SpanLarge = styled(CommonSpan)`
  font-size: var(--typ-spn-lg-fs);
  line-height: var(--typ-spn-lg-lh);
`;

export const SpanMedium = styled(CommonSpan)`
  font-size: var(--typ-spn-md-fs);
  line-height: var(--typ-spn-md-lh);
`;

export const SpanSmall = styled(CommonSpan)`
  font-size: var(--typ-spn-sm-fs);
  line-height: var(--typ-spn-sm-lh);
`;

export const LabelLarge = styled(CommonLabel)`
  font-size: var(--typ-lbl-lg-fs);
  line-height: var(--typ-lbl-lg-lh);
`;

export const LabelMedium = styled(CommonLabel)`
  font-size: var(--typ-lbl-md-fs);
  line-height: var(--typ-lbl-md-lh);
`;

export const LabelSmall = styled(CommonLabel)`
  font-size: var(--typ-lbl-sm-fs);
  line-height: var(--typ-lbl-sm-lh);
`;

export const B = styled.span`
  font-variation-settings: 'wght' 700;
  font-weight: 700;
`;

export const It = styled.span`
  font-style: italic;
  font-synthesis: none;
`;
