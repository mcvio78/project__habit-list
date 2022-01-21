import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageContainer } from './components/layout';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { Account } from './pages/Account';
import { AuthContext } from './auth/context';
import { ResetContext } from './auth/ResetContext';

export const App = (): JSX.Element => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.body.dataset.theme = 'light';
  }, []);

  return (
    // eslint-disable-next-line
    <AuthContext.Provider value={{ user, setUser }}>
      <ResetContext />
      <PageContainer>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          {user && <Route path="/account" element={<Account />} />}
          <Route path="/" element={<Home />} />
        </Routes>
      </PageContainer>
    </AuthContext.Provider>
  );
};
