import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as EmailSVG } from '../assets/icons/icon-email_24dp.svg';

import { AppInputText } from '../components/UI/Input';

export default {
  title: 'Input',
  component: AppInputText,
} as ComponentMeta<typeof AppInputText>;

export const Default: ComponentStory<typeof AppInputText> = () => (
  <AppInputText
    IconSVG={EmailSVG}
    $label="your email"
    id="email"
    value="fake@email.com"
    onChange={() => {}}
    onBlur={() => {}}
  />
);
