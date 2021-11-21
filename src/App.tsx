import React from 'react';

import { PageContainer } from './components/layout/PageContainer';
import { Home, TestText } from './pages/Home';

export default function App() {
  return (
    <PageContainer>
      <Home>
        <TestText>My Habits List</TestText>
      </Home>
    </PageContainer>
  );
}
