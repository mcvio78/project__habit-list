import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../../components/UI/Modal';

export default {
  title: 'Components/UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  showModal: true,
};

export const ModalWithNotification = Template.bind({});
ModalWithNotification.args = {
  showModal: true,
  modalCallback: () => {},
  status: 500,
  modalMessage: 'Error',
};
