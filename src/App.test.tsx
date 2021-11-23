import { render, screen } from '@testing-library/react';

import { App } from './App';

test('renders my habits list', () => {
  render(<App />);
  const linkElement = screen.getByText(/my habits list/i);
  expect(linkElement).toBeInTheDocument();
});
