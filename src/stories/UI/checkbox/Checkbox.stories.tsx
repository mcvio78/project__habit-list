import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '../../../components/UI/checkbox';

export default {
  title: 'Components/UI/Checkbox',
  component: Checkbox,
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
} as ComponentMeta<typeof Checkbox>;

export const DefaultCheckbox: ComponentStory<typeof Checkbox> = args => (
  <Checkbox {...args} />
);
