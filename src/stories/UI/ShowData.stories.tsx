import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShowData } from '../../components/UI/ShowData';

export default {
  title: 'Components/UI/ShowData',
  component: ShowData,
} as ComponentMeta<typeof ShowData>;

export const DefaultShowData: ComponentStory<typeof ShowData> = ({
  fieldTitle = 'Field title',
  fieldValue = 'Field value',
}) => <ShowData fieldTitle={fieldTitle} fieldValue={fieldValue} />;
