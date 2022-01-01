import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppButton } from '../components/UI/buttons';

export default {
  title: 'Button',
  component: AppButton,
} as ComponentMeta<typeof AppButton>;

export const Default: ComponentStory<typeof AppButton> = args => (
  <AppButton {...args}>Default</AppButton>
);

export const Disabled: ComponentStory<typeof AppButton> = ({
  title,
  'aria-label': ariaLabel,
  ...args
}) => (
  <AppButton title="AppButton" aria-label="a button" disabled {...args}>
    Disabled
  </AppButton>
);

export const Submit: ComponentStory<typeof AppButton> = ({
  title,
  'aria-label': ariaLabel,
  ...args
}) => (
  <AppButton
    title="AppButton"
    aria-label="form submit button"
    type="submit"
    name="subject"
    value="form"
    id="submit-form-01"
    {...args}
  >
    Submit
  </AppButton>
);
