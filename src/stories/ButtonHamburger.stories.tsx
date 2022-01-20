import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppButtonHamburger } from '../components/UI/buttons';

export default {
  title: 'ButtonHamburger',
  component: AppButtonHamburger,
} as ComponentMeta<typeof AppButtonHamburger>;

export const Default: ComponentStory<typeof AppButtonHamburger> = () => (
  <AppButtonHamburger
    aria-label="open side drawer menu button"
    title="hamburger button"
    isOpen
  />
);
