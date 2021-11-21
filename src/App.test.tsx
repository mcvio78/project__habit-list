import { render, screen } from '@testing-library/react';

import { App } from './App';
import { Theme } from './hoc/Theme';

test('renders my habits list', () => {
  render(
    <Theme>
      <App />
    </Theme>,
  );
  const linkElement = screen.getByText(/my habits list/i);
  expect(linkElement).toBeInTheDocument();
});
