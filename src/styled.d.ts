import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: {
        primary: string;
        primaryVariant: string;
      },
      dark: {
        primary: string;
        primaryVariant: string;
      }
    };
  }
}
