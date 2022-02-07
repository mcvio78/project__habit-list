import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  SpanLarge,
  SpanMedium,
  SpanSmall,
} from '../../components/UI/Typography';

export default {
  title: 'Components/UI/Typography/Span',
  component: SpanLarge,
  subcomponents: {
    SpanLarge,
    SpanMedium,
    SpanSmall,
  },
} as ComponentMeta<typeof SpanLarge>;

export const DefaultSpanLarge: ComponentStory<typeof SpanLarge> = ({
  ...args
}) => <SpanLarge {...args}>SpanLarge</SpanLarge>;

export const DefaultSpanMedium: ComponentStory<typeof SpanMedium> = ({
  ...args
}) => <SpanMedium {...args}>SpanMedium</SpanMedium>;

export const DefaultSpanSmall: ComponentStory<typeof SpanSmall> = ({
  ...args
}) => <SpanSmall {...args}>SpanSmall</SpanSmall>;
