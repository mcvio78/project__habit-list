import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ParagraphLarge, It } from '../components/Typography';

export default {
  title: 'ParagraphLarge',
  component: ParagraphLarge,
  subcomponents: It,
} as ComponentMeta<typeof ParagraphLarge>;

export const Default: ComponentStory<typeof ParagraphLarge> = args => (
  <ParagraphLarge {...args}>Basic ParagraphLarge</ParagraphLarge>
);

export const Styled: ComponentStory<typeof ParagraphLarge> = args => (
  <ParagraphLarge {...args} $txtSdw $txtClr="navy">
    <It>Styled ParagraphLarge</It>
  </ParagraphLarge>
);
