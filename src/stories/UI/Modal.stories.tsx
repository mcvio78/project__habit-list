import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../../components/UI/Modal';

export default {
  title: 'Components/UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const DefaultModal: ComponentStory<typeof Modal> = ({
  showModal = true,
  ...args
}) => <Modal showModal={showModal} {...args} />;
