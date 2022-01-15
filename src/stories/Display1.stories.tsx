import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Display1, It } from '../components/UI/Typography';

export default {
  title: 'Display1',
  component: Display1,
  subcomponents: It,
} as ComponentMeta<typeof Display1>;

export const Default: ComponentStory<typeof Display1> = args => (
  <Display1 {...args}>Basic Display1</Display1>
);

export const Styled: ComponentStory<typeof Display1> = args => (
  <Display1 {...args} $textShadow $txtClr="navy">
    <It>Styled Display1</It>
  </Display1>
);
