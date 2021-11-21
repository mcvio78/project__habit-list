import React from 'react';

import { PageContainer } from './components/layout/PageContainer';
import { Home, TestText } from './pages/Home';

export const App = () => {
  return (
    <PageContainer>
      <Home>
        <TestText>My Habits List</TestText>
      </Home>
    </PageContainer>
  );
};
