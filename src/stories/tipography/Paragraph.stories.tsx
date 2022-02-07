import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ParagraphLarge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphExtraSmall,
} from '../../components/UI/Typography';

export default {
  title: 'Components/UI/Typography/Paragraph',
  component: ParagraphLarge,
  subcomponents: {
    ParagraphLarge,
    ParagraphMedium,
    ParagraphSmall,
    ParagraphExtraSmall,
  },
} as ComponentMeta<typeof ParagraphLarge>;

export const DefaultParagraphLarge: ComponentStory<typeof ParagraphLarge> = ({
  ...args
}) => <ParagraphLarge {...args}>ParagraphLarge</ParagraphLarge>;

export const DefaultParagraphMedium: ComponentStory<typeof ParagraphMedium> = ({
  ...args
}) => <ParagraphMedium {...args}>ParagraphMedium</ParagraphMedium>;

export const DefaultParagraphSmall: ComponentStory<typeof ParagraphSmall> = ({
  ...args
}) => <ParagraphSmall {...args}>ParagraphSmall</ParagraphSmall>;

export const DefaultParagraphExtraSmall: ComponentStory<
  typeof ParagraphExtraSmall
> = ({ ...args }) => (
  <ParagraphExtraSmall {...args}>ParagraphExtraSmall</ParagraphExtraSmall>
);
