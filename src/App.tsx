import React, { useEffect } from 'react';

import { PageContainer } from './components/layout/PageContainer';
import { Home, TestText } from './pages/Home';

export const App = () => {
  useEffect(() => {
    document.body.dataset.theme = 'light';
  }, []);

  return (
    <PageContainer>
      <Home>
        <TestText>My Habits List</TestText>
      </Home>
    </PageContainer>
  );
};
