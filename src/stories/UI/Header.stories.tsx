import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../../components/UI/Header';

export default {
  title: 'Components/UI/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const DefaultHeader: ComponentStory<typeof Header> = ({
  $header,
  ...args
}) => <Header $header="Headline" {...args} />;

export const WithSubHeader: ComponentStory<typeof Header> = ({
  $header,
  $subHeader,
  ...args
}) => <Header $header="Headline" $subHeader="Subheadline" {...args} />;
