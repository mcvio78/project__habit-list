import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputText } from '../../../components/UI/input/inputText';
import { Container } from '../../../components/layout/Container';

export default {
  title: 'Components/UI/Input',
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = () => (
  <Container
    $p={{ de: '30px' }}
    style={{ backgroundColor: 'var(--primary_01)' }}
  >
    <InputText />
  </Container>
);
export const DefaultInputText = Template.bind({});
