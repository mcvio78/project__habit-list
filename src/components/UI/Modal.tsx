import { useCallback } from 'react';
import styled from 'styled-components/macro';

import { DynamicWrapper } from '../../utility/DynamicWrapper';
import { Backdrop } from './Backdrop';
import { Container } from '../layout';
import { HeadingExtraLarge, ParagraphSmall, It, B } from '../Typography';
import { AppButton } from './buttons';
import { ReactComponent as CloseSVG } from '../../assets/icons/icon-close_24dp.svg';

interface ModalProps {
  showModal: boolean;
  modalCallback: () => void;
  modalMessage: string;
}

const TextContainer = styled(Container)`
  border-radius: 2px;
  background-color: var(--secondary_01);
  box-shadow: 0 4px 4px var(--neutral_10_op05);
  transform: translate(-50%, -50%);
`;

const ErrorIcon = styled(CloseSVG)`
  --padding: 4px;
  padding: var(--padding);
  transform: scale(2) translateY(calc(-50% + var(--padding) / 2));
  border-radius: 50%;
  fill: var(--neutral_01);
  background-color: var(--accent_05);
`;

export const Modal = ({
  showModal,
  modalCallback,
  modalMessage,
}: ModalProps): JSX.Element => {
  const onKeyDownHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      if (event.key === 'Escape' || event.key === 'Esc' || event.key === '27') {
        modalCallback();
      }
    },
    [modalCallback],
  );

  return (
    <DynamicWrapper keyEvt="keydown" callback={onKeyDownHandler}>
      <Backdrop $isOpen={showModal} $setIsOpen={modalCallback} />

      {showModal && (
        <TextContainer
          $w={{ de: '80%' }}
          $mxw={{ de: '400px' }}
          $miw={{ de: '60px' }}
          $pos={{ de: 'fixed' }}
          $top={{ de: '50%' }}
          $lt={{ de: '50%' }}
          $fd={{ de: 'column' }}
          $jc={{ de: 'center' }}
          $ai={{ de: 'center' }}
          $zi={{ de: 300 }}
          $p={{ de: '12px 0' }}
          $g={{ de: '12px' }}
        >
          <ErrorIcon />
          <HeadingExtraLarge $txtClr="var(--neutral_11)">
            Error!
          </HeadingExtraLarge>
          <ParagraphSmall $txtClr="var(--neutral_12)">
            {modalMessage}
          </ParagraphSmall>
          <AppButton
            $md
            $hb
            $bkgCol="var(--accent_05)"
            $boxSdw
            aria-label="close modal"
            title="close modal button"
            onClick={modalCallback}
          >
            <B>
              <It>OK</It>
            </B>
          </AppButton>
        </TextContainer>
      )}
    </DynamicWrapper>
  );
};
