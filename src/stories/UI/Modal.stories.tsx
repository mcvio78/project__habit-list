import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../../components/UI/Modal';

export default {
  title: 'Components/UI/Modal',
  component: Modal,
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/home']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  showModal: true,
  modalCallback: () => {},
  status: 200,
  modalMessage: 'modal message',
};

export const ModalWithNotification = Template.bind({});
ModalWithNotification.args = {
  showModal: true,
  modalCallback: () => {},
  status: 500,
  modalMessage: 'Error',
};
