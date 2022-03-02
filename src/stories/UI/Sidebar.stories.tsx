import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SideBar } from '../../components/UI/Sidebar';
import { AuthContext } from '../../auth/context';

export default {
  title: 'Components/UI/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

export const DefaultSideBar: ComponentStory<typeof SideBar> = () => (
  <MemoryRouter>
    <AuthContext.Provider
      // eslint-disable-next-line
      value={{
        userState: [
          {
            aud: 'aud',
            email: 'email',
            exp: 1,
            iat: 1,
            iss: 'iss',
            username: 'username',
            nbf: 1,
            permissions: [],
            sub: 'sub',
            id: 'user_id',
          },
          () => {},
        ],
        themeState: ['theme', () => {}],
        dailyState: [[], () => {}],
        resultsState: [
          {
            dailyResult: { pending: 0, successful: 0, failed: 0, postponed: 0 },
            weeklyResult: {
              pending: 0,
              successful: 0,
              failed: 0,
              postponed: 0,
            },
            monthlyResult: {
              pending: 0,
              successful: 0,
              failed: 0,
              postponed: 0,
            },
          },
          () => {},
        ],
      }}
    >
      <SideBar />
    </AuthContext.Provider>
  </MemoryRouter>
);
