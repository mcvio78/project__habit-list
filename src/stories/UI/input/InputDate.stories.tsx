import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputDate } from '../../../components/UI/input/inputDate';
import { Container } from '../../../components/layout/Container';

export default {
  title: 'Components/UI/Input',
  component: InputDate,
} as ComponentMeta<typeof InputDate>;

const Template: ComponentStory<typeof InputDate> = args => (
  <Container
    $p={{ de: '30px' }}
    style={{ backgroundColor: 'var(--primary_01)' }}
  >
    <InputDate {...args} />
  </Container>
);
export const DefaultInputDate = Template.bind({});
DefaultInputDate.args = {
  selected: new Date(),
  onChange: () => {},
};
