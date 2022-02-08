import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../../components/UI/Header';

export default {
  title: 'Components/UI/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  $header: 'Headline',
};

export const WithSubHeader = Template.bind({});
WithSubHeader.args = {
  $header: 'Headline',
  $subHeader: 'Subheadline',
};
