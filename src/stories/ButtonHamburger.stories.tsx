import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonHamburger } from '../components/buttons/ButtonHamburger';

export default {
  title: 'ButtonHamburger',
  component: ButtonHamburger,
} as ComponentMeta<typeof ButtonHamburger>;

export const Default: ComponentStory<typeof ButtonHamburger> = () => (
  <ButtonHamburger aria-label="open settings menu button" />
);
