import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../../components/UI/button';

export default {
  title: 'Components/UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button title="Button" aria-label="button" {...args}>
    Button
  </Button>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  $backgroundColor: 'white',
  $boxShadow: true,
  $labelShadow: true,
};
