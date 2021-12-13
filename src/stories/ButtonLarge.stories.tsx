import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonLarge } from '../components/buttons/ButtonLarge';

export default {
  title: 'LargeButton',
  component: ButtonLarge,
} as ComponentMeta<typeof ButtonLarge>;

export const Default: ComponentStory<typeof ButtonLarge> = args => (
  <ButtonLarge {...args}>Default</ButtonLarge>
);

export const Disabled: ComponentStory<typeof ButtonLarge> = ({
  title,
  'aria-label': ariaLabel,
  ...args
}) => (
  <ButtonLarge
    title="ButtonLarge"
    aria-label="a large button"
    disabled
    {...args}
  >
    Disabled
  </ButtonLarge>
);

export const Submit: ComponentStory<typeof ButtonLarge> = ({
  title,
  'aria-label': ariaLabel,
  ...args
}) => (
  <ButtonLarge
    title="ButtonLarge"
    aria-label="form submit button"
    type="submit"
    name="subject"
    value="form"
    id="submit-form-01"
    {...args}
  >
    Submit
  </ButtonLarge>
);
