import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonLarge } from '../components/buttons/ButtonLarge';

export default {
  title: 'LargeButton',
  component: ButtonLarge,
} as ComponentMeta<typeof ButtonLarge>;

export const Default: ComponentStory<typeof ButtonLarge> = args => (
  <ButtonLarge {...args}>Basic</ButtonLarge>
);
