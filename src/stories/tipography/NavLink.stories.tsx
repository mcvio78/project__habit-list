import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as HomeSVG } from '../../assets/icons/icon-home_24dp.svg';

import {
  NavLinkLarge,
  NavLinkMedium,
  NavLinkSmall,
  NavLinkExtraSmall,
  NavLinkIcon,
} from '../../components/UI/Typography';

export default {
  title: 'Components/UI/Typography/NavLink',
  component: NavLinkLarge,
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/home']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  subcomponents: {
    NavLinkLarge,
    NavLinkMedium,
    NavLinkSmall,
    NavLinkExtraSmall,
    NavLinkIcon,
  },
} as ComponentMeta<typeof NavLinkLarge>;

export const DefaultNavLinkLarge: ComponentStory<typeof NavLinkLarge> = ({
  ...args
}) => (
  <NavLinkLarge to="" aria-label="ariaLabel" {...args}>
    NavLinkLarge
  </NavLinkLarge>
);

export const DefaultNavLinkMedium: ComponentStory<typeof NavLinkMedium> = ({
  ...args
}) => (
  <NavLinkMedium to="" aria-label="ariaLabel" {...args}>
    NavLinkMedium
  </NavLinkMedium>
);

export const DefaultNavLinkSmall: ComponentStory<typeof NavLinkSmall> = ({
  ...args
}) => (
  <NavLinkSmall to="" aria-label="ariaLabel" {...args}>
    NavLinkSmall
  </NavLinkSmall>
);

export const DefaultNavLinkExtraSmall: ComponentStory<
  typeof NavLinkExtraSmall
> = ({ ...args }) => (
  <NavLinkExtraSmall to="" aria-label="ariaLabel" {...args}>
    NavLinkExtraSmall
  </NavLinkExtraSmall>
);

export const DefaultNavIcon: ComponentStory<typeof NavLinkIcon> = ({
  ...args
}) => (
  <NavLinkIcon to="" aria-label="ariaLabel" {...args}>
    <HomeSVG />
  </NavLinkIcon>
);
