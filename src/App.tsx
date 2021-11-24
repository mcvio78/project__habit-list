import React, { useEffect } from 'react';

import { PageContainer } from './components/layout/PageContainer';
import { Home } from './pages/Home';
import { Display1 } from './components/Typograpy';

export const App = () => {
  useEffect(() => {
    document.body.dataset.theme = 'light';
  }, []);

  return (
    <PageContainer>
      <Home>
        <Display1>
          My
          <br />
          Habits List
        </Display1>
      </Home>
    </PageContainer>
  );
};
