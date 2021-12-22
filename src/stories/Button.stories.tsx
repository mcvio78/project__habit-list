import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/UI/buttons';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = args => (
  <Button {...args}>Default</Button>
);

export const Disabled: ComponentStory<typeof Button> = ({
  title,
  'aria-label': ariaLabel,
  ...args
}) => (
  <Button title="Button" aria-label="a button" disabled {...args}>
    Disabled
  </Button>
);

export const Submit: ComponentStory<typeof Button> = ({
  title,
  'aria-label': ariaLabel,
  ...args
}) => (
  <Button
    title="Button"
    aria-label="form submit button"
    type="submit"
    name="subject"
    value="form"
    id="submit-form-01"
    {...args}
  >
    Submit
  </Button>
);
