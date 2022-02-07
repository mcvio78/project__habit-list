import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  LabelLarge,
  LabelMedium,
  LabelSmall,
} from '../../components/UI/Typography';

export default {
  title: 'Components/UI/Typography/Label',
  component: LabelLarge,
  subcomponents: {
    LabelLarge,
    LabelMedium,
    LabelSmall,
  },
} as ComponentMeta<typeof LabelLarge>;

export const DefaultLabelLarge: ComponentStory<typeof LabelLarge> = ({
  ...args
}) => <LabelLarge {...args}>LabelLarge</LabelLarge>;

export const DefaultLabelMedium: ComponentStory<typeof LabelMedium> = ({
  ...args
}) => <LabelMedium {...args}>LabelMedium</LabelMedium>;

export const DefaultLabelSmall: ComponentStory<typeof LabelSmall> = ({
  ...args
}) => <LabelSmall {...args}>LabelSmall</LabelSmall>;
