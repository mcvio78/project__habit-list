import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageContainer } from './components/layout/PageContainer';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';

export const App = () => {
  useEffect(() => {
    document.body.dataset.theme = 'light';
  }, []);

  return (
    <PageContainer>
      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </PageContainer>
  );
};
