import { Backdrop } from './Backdrop';

interface DialogProps {
  isOpen: boolean;
  setOpenDialog: () => void;
  habitIndex: number;
}

export const Dialog = ({
  isOpen,
  setOpenDialog,
  habitIndex,
}: DialogProps): JSX.Element => (
  <>
    <Backdrop isOpen={isOpen} setIsOpen={setOpenDialog} />
    <h1>{habitIndex}</h1>
  </>
);
