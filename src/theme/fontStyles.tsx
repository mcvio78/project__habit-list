import { css } from 'styled-components';

import montserratVariable from '../fonts/MontserratVF.woff2';
import montserratVariableItalic from '../fonts/MontserratVF_Italic.woff2';
import montserratRegular from '../fonts/Montserrat_Regular.woff2';
import montserratItalic from '../fonts/Montserrat_Italic.woff2';
import montserratSemiBoldItalic from '../fonts/Montserrat_Semi-Bold-Italic.woff2';
import montserratBold from '../fonts/Montserrat_Bold.woff2';

export const fontStyles = css`
  @font-face {
    font-family: 'Montserrat VF';
    src: url(${montserratVariable}) format('woff2-variations');
    font-weight: 100 900;
    font-stretch: 50% 150%;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat VF';
    src: url(${montserratVariableItalic}) format('woff2-variations');
    font-weight: 100 900;
    font-stretch: 50% 150%;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratItalic}) format('woff2');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratSemiBoldItalic}) format('woff2');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;
