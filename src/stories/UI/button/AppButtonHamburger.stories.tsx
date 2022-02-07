import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppButtonHamburger } from '../../../components/UI/button';
import { Container } from '../../../components/layout/Container';

export default {
  title: 'Components/UI/Button',
  component: AppButtonHamburger,
} as ComponentMeta<typeof AppButtonHamburger>;

const Template: ComponentStory<typeof AppButtonHamburger> = args => (
  <Container
    $p={{ de: '30px' }}
    style={{ backgroundColor: 'var(--primary_01)' }}
  >
    <AppButtonHamburger
      title="AppButtonHamburger"
      aria-label="hamburger button"
      {...args}
    >
      AppButtonHamburger
    </AppButtonHamburger>
  </Container>
);

export const DefaultAppButtonHamburger = Template.bind({});
DefaultAppButtonHamburger.args = {
  isOpen: false,
};
