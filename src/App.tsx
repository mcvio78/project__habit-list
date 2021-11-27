import React, { useEffect } from 'react';

import './theme/fontStyles.css';

import { PageContainer } from './components/layout/PageContainer';
import { Home } from './pages/Home';

export const App = () => {
  useEffect(() => {
    document.body.dataset.theme = 'light';
  }, []);

  return (
    <PageContainer>
      <Home />
    </PageContainer>
  );
};
