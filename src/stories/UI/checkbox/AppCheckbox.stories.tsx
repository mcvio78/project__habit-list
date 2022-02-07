import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppCheckbox } from '../../../components/UI/checkbox';

export default {
  title: 'Components/UI/Checkbox',
  component: AppCheckbox,
  decorators: [
    Story => (
      <div
        style={{
          width: '100vw',
          height: '20vh',
          backgroundColor: 'grey',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof AppCheckbox>;

const Template: ComponentStory<typeof AppCheckbox> = args => (
  <AppCheckbox {...args} />
);

export const DefaultAppCheckbox = Template.bind({});
DefaultAppCheckbox.args = {
  $labelText: 'App Checkbox',
};
