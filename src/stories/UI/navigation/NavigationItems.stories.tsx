import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthContext } from '../../../auth/context';

import {
  NavigationItems,
  NavigationItem,
} from '../../../components/UI/navigation';

export default {
  title: 'Components/UI/Navigation',
  component: NavigationItems,
  subcomponents: { NavigationItem },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/']}>
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
          }}
        >
          <Story />
        </AuthContext.Provider>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof NavigationItems>;

const Template: ComponentStory<typeof NavigationItems> = args => (
  <NavigationItems {...args}>
    <NavigationItem to="not-home" aria-label="navigation link">
      Navigation Item
    </NavigationItem>
  </NavigationItems>
);

export const DefaultNavigationItems = Template.bind({});
DefaultNavigationItems.args = {
  $animated: true,
};
