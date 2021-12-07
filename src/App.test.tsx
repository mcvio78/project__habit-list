import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App component tests', () => {
  test('renders my habits list header', () => {
    render(<App />);
    expect(screen.getByText('*not backed up')).toBeVisible();
  });
});
