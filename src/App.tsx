import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageContainer } from './components/layout';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { AuthContext } from './auth/context';

export const App = (): JSX.Element => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.body.dataset.theme = 'light';
  }, []);

  return (
    // eslint-disable-next-line
    <AuthContext.Provider value={{ user, setUser }}>
      <PageContainer>
        <Routes>
          <Route path="auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </PageContainer>
    </AuthContext.Provider>
  );
};
