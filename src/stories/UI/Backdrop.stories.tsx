import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Backdrop } from '../../components/UI/Backdrop';

export default {
  title: 'Components/UI/Backdrop',
  component: Backdrop,
} as ComponentMeta<typeof Backdrop>;

export const DefaultBackdrop: ComponentStory<typeof Backdrop> = ({
  ...args
}) => <Backdrop {...args} />;

export const AnimatedBackdrop: ComponentStory<typeof Backdrop> = ({
  isOpen,
}) => {
  const AnimatedBackdropRef = useRef<HTMLInputElement>(null);
  return (
    <CSSTransition
      in={isOpen}
      timeout={{ enter: 3000, exit: 3000 }}
      mountOnEnter
      unmountOnExit
      appear
      nodeRef={AnimatedBackdropRef}
    >
      <Backdrop
        isOpen
        setIsOpen={() => {}}
        $animated
        ref={AnimatedBackdropRef}
      />
    </CSSTransition>
  );
};
