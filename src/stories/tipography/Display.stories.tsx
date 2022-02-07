import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Display1, Display2, Display3 } from '../../components/UI/Typography';

export default {
  title: 'Components/UI/Typography/Display',
  component: Display1,
  subcomponents: {
    Display1,
    Display2,
    Display3,
  },
} as ComponentMeta<typeof Display1>;

export const DefaultDisplay1: ComponentStory<typeof Display1> = ({
  ...args
}) => <Display1 {...args}>Display1</Display1>;

export const DefaultDisplay2: ComponentStory<typeof Display2> = ({
  ...args
}) => <Display2 {...args}>Display2</Display2>;

export const DefaultDisplay3: ComponentStory<typeof Display3> = ({
  ...args
}) => <Display3 {...args}>Display3</Display3>;
