import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as EmailSVG } from '../assets/icons/icon-email_24dp.svg';

import { Input } from '../components/UI/Input/Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = () => (
  <Input
    type="email"
    id="email"
    name="email"
    $label="your email"
    IconSVG={EmailSVG}
    placeholder="email here"
  />
);
