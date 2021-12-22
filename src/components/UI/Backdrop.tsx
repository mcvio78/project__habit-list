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
  background-color: rgba(var(--clr-nt-v02-rgb), 0.5);
`;

export const Backdrop = ({ $isOpen, $setIsOpen }: BackdropProps) => {
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
