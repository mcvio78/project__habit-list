import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ParagraphLarge } from '../components/Typography';

export default {
  title: 'ParagraphLarge',
  component: ParagraphLarge,
} as ComponentMeta<typeof ParagraphLarge>;

export const Default: ComponentStory<typeof ParagraphLarge> = args => (
  <ParagraphLarge {...args}>Basic</ParagraphLarge>
);

export const Styled: ComponentStory<typeof ParagraphLarge> = args => (
  <ParagraphLarge {...args} it txtSdw txtClr="red">
    Styled
  </ParagraphLarge>
);
