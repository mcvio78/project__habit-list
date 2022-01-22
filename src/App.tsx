import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageContainer } from './components/layout';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { Account } from './pages/Account';
import { Settings } from './pages/Settings';
import { AuthContext } from './auth/context';
import { ResetContext } from './auth/ResetContext';
import { themes } from './config/constants/themes';

export const App = (): JSX.Element => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(themes[0]);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line
      value={{ userState: [user, setUser], themeState: [theme, setTheme] }}
    >
      <ResetContext />
      <PageContainer>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          {user && <Route path="/account" element={<Account />} />}
          <Route path="/Settings" element={<Settings />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </PageContainer>
    </AuthContext.Provider>
  );
};
