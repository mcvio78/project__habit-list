import styled from 'styled-components/macro';

interface BackdropProps {
  $isOpen: boolean;
  $setIsOpen: () => void;
}

export const BackdropStyled = styled.div.attrs(props => ({
  role: props.role || 'button',
  tabIndex: props.tabIndex || 0,
}))`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: var(--neutral_10_op05);
`;

export const Backdrop = ({
  $isOpen,
  $setIsOpen,
}: BackdropProps): JSX.Element | null => {
  if ($isOpen) {
    return (
      <BackdropStyled
        onClick={$setIsOpen}
        onKeyDown={event => event.key === 'Escape' && $setIsOpen()}
      />
    );
  }
  return null;
};
