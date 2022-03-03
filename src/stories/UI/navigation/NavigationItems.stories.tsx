import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContextProvider } from '../../../auth/contextProvider';

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
        <ContextProvider>
          <Story />
        </ContextProvider>
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
