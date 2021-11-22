import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { ReactNode } from 'react';

import montserratVariable from '../fonts/Montserrat_VF.woff2';
import montserratRegular from '../fonts/Montserrat_Regular.woff2';
import montserratItalic from '../fonts/Montserrat_Italic.woff2';
import montserratSemiBoldItalic from '../fonts/Montserrat_Semi-Bold-Italic.woff2';
import montserratBold from '../fonts/Montserrat_Bold.woff2';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Montserrat VF';
    src: url(${montserratVariable}) format('woff2-variations'),
         url(${montserratVariable}) format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratItalic}) format('woff2');
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratSemiBoldItalic}) format('woff2');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratBold}) format('woff2');
    font-weight: 700;
  }

  html  {
    font-family: 'Montserrat', sans-serif;

    @supports (font-variation-settings: normal) {
        font-family: 'Montserrat VF', sans-serif;
    }
  }
`;

interface GlobalProps {
  children: ReactNode;
}

export const Global = ({ children }: GlobalProps) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
