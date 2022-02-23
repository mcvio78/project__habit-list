import '../src/theme/fontStyles.css';
import { GlobalStyle } from '../src/theme/GlobalStyle';
import { Theme } from '../src/helpers/constants';

document.body.dataset.theme = Theme.Light;

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
