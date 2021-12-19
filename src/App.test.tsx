import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

describe('App component tests', () => {
  test('renders paragraph text', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(screen.getByText('Start organizing your life!')).toBeVisible();
  });
});
