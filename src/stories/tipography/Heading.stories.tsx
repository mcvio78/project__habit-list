import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  HeadingExtraLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingExtraSmall,
} from '../../components/UI/Typography';

export default {
  title: 'Components/UI/Typography/Heading',
  component: HeadingExtraLarge,
  subcomponents: {
    HeadingExtraLarge,
    HeadingLarge,
    HeadingMedium,
    HeadingSmall,
    HeadingExtraSmall,
  },
} as ComponentMeta<typeof HeadingExtraLarge>;

export const DefaultHeadingExtraLarge: ComponentStory<
  typeof HeadingExtraLarge
> = ({ ...args }) => (
  <HeadingExtraLarge {...args}>HeadingExtraLarge</HeadingExtraLarge>
);

export const DefaultHeadingLarge: ComponentStory<typeof HeadingLarge> = ({
  ...args
}) => <HeadingLarge {...args}>HeadingLarge</HeadingLarge>;

export const DefaultHeadingMedium: ComponentStory<typeof HeadingMedium> = ({
  ...args
}) => <HeadingMedium {...args}>HeadingMedium</HeadingMedium>;

export const DefaultHeadingSmall: ComponentStory<typeof HeadingSmall> = ({
  ...args
}) => <HeadingSmall {...args}>HeadingSmall</HeadingSmall>;

export const DefaultHeadingExtraSmall: ComponentStory<
  typeof HeadingExtraSmall
> = ({ ...args }) => (
  <HeadingExtraSmall {...args}>HeadingExtraSmall</HeadingExtraSmall>
);
