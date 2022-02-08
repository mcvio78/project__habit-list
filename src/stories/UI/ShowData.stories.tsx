import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShowData } from '../../components/UI/ShowData';

export default {
  title: 'Components/UI/ShowData',
  component: ShowData,
} as ComponentMeta<typeof ShowData>;

const Template: ComponentStory<typeof ShowData> = args => (
  <ShowData {...args} />
);

export const DefaultShowData = Template.bind({});
DefaultShowData.args = {
  fieldTitle: 'Field title',
  fieldValue: 'Field value',
};
