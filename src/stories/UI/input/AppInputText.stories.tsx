import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppInputText } from '../../../components/UI/input/inputText';
import { Container } from '../../../components/layout';
import { ReactComponent as EmailSVG } from '../../../assets/icons/icon-email_24dp.svg';

export default {
  title: 'Components/UI/Input',
  component: AppInputText,
} as ComponentMeta<typeof AppInputText>;

const Template: ComponentStory<typeof AppInputText> = args => (
  <Container
    $p={{ de: '30px' }}
    style={{ backgroundColor: 'var(--primary_01)' }}
  >
    <AppInputText {...args} />
  </Container>
);

export const DefaultAppInputText = Template.bind({});
DefaultAppInputText.args = {
  id: 'app-input-text',
  IconSVG: EmailSVG,
  $label: 'Input Text',
  onClick: () => {},
};
