import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppFormInputError } from '../../components/form';
import { Container } from '../../components/layout';

export default {
  title: 'Components/Form',
  component: AppFormInputError,
} as ComponentMeta<typeof AppFormInputError>;

const Template: ComponentStory<typeof AppFormInputError> = args => (
  <Container
    $p={{ de: '30px' }}
    style={{ backgroundColor: 'var(--primary_01)' }}
  >
    <AppFormInputError {...args} />
  </Container>
);

export const AppFormInputErrorMessage = Template.bind({});
AppFormInputErrorMessage.args = {
  error: 'error message',
  touched: true,
};
