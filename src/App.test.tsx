import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App component tests', () => {
  test('renders paragraph text', () => {
    render(<App />);
    expect(screen.getByText('Start organizing your life!')).toBeVisible();
  });
});
