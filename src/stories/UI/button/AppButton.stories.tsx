import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppButton } from '../../../components/UI/button';
import { Container } from '../../../components/layout/Container';

export default {
  title: 'Components/UI/Button',
  component: AppButton,
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = args => (
  <Container
    $p={{ de: '30px' }}
    style={{ backgroundColor: 'var(--primary_01)' }}
  >
    <AppButton title="AppButton" aria-label="App button" {...args}>
      AppButton
    </AppButton>
  </Container>
);

export const DefaultAppButton = Template.bind({});
DefaultAppButton.args = {
  $variant: {
    options: ['standard', 'flat', 'text', 'alert'],
    control: { type: 'radio' },
  },
  $size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
  },
};
