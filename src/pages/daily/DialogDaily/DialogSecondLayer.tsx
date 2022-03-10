import styled from 'styled-components/macro';

import { Backdrop } from '../../../components/UI/Backdrop';
import { HeadingLarge } from '../../../components/UI/Typography';
import { Container } from '../../../components/layout';
import { AppButton } from '../../../components/UI/button';

interface DialogSecondLayerProps {
  isOpen: boolean;
  confirmHandler: () => void;
  discardHandler: () => void;
  $dialogIndex: number;
}

const DeleteModalContainer = styled(Container)`
  background-color: var(--secondary_05);
  border-radius: 8px;
`;

export const DialogSecondLayer = ({
  isOpen,
  confirmHandler,
  discardHandler,
  $dialogIndex,
}: DialogSecondLayerProps): JSX.Element | null => {
  if (isOpen) {
    return (
      <>
        <Backdrop
          isOpen
          $pos={{ de: 'absolute' }}
          $w={{ de: '100%' }}
          $h={{ de: '100%' }}
          $zi={{ de: $dialogIndex }}
          $bs={{ de: 'border-box' }}
        />
        <DeleteModalContainer
          $pos={{ de: 'absolute' }}
          $fd={{ de: 'column' }}
          $g={{ de: '12px' }}
          $p={{ de: '24px' }}
          $zi={{ de: $dialogIndex }}
        >
          <HeadingLarge>Are you sure?</HeadingLarge>
          <Container $jc={{ de: 'space-between' }} $miw={{ de: '160px' }}>
            <AppButton
              $variant="alert"
              $size="medium"
              $bold
              title="Button to confirm deleting"
              aria-label="button to confirm deleting"
              onClick={confirmHandler}
            >
              Yes
            </AppButton>
            <AppButton
              $variant="flat"
              $size="medium"
              $bold
              title="Button to discard deleting"
              aria-label="button to discard deleting"
              onClick={discardHandler}
            >
              Cancel
            </AppButton>
          </Container>
        </DeleteModalContainer>
      </>
    );
  }
  return null;
};
