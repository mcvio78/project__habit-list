import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppInputDate } from '../../../components/UI/input/inputDate';
import { Container } from '../../../components/layout';
import { ReactComponent as EventSVG } from '../../../assets/icons/icon-event_24dp.svg';

export default {
  title: 'Components/UI/Input',
  component: AppInputDate,
} as ComponentMeta<typeof AppInputDate>;

const Template: ComponentStory<typeof AppInputDate> = args => (
  <Container
    $p={{ de: '30px' }}
    style={{ backgroundColor: 'var(--primary_01)' }}
  >
    <AppInputDate {...args} />
  </Container>
);

export const DefaultAppInputDate = Template.bind({});
DefaultAppInputDate.args = {
  id: 'app-input-date',
  IconSVG: EventSVG,
  $label: 'Input Date',
  selected: new Date(),
  onChange: () => {},
  onClick: () => {},
};
