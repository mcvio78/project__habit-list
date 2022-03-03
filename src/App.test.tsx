import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { ContextProvider } from './auth/contextProvider';

describe('App component tests', () => {
  test('renders paragraph text', () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </BrowserRouter>,
    );
    expect(screen.getByText('Start organizing your life!')).toBeVisible();
  });
});
