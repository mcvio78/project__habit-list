import { useCallback } from 'react';
import styled, { css } from 'styled-components/macro';

import { Backdrop } from './Backdrop';
import { Container } from '../layout';
import { HeadingExtraLarge, ParagraphSmall } from './Typography';
import { AppButton } from './button';
import { ReactComponent as CloseSVG } from '../../assets/icons/icon-close_24dp.svg';
import { ReactComponent as CheckSVG } from '../../assets/icons/icons-check_24dp.svg';
import { useKeyEvent } from '../../hooks/';
import { successStatus, errorStatus } from '../../utility/request/statuses';

interface ModalProps {
  showModal: boolean;
  modalCallback: () => void;
  status: number | null;
  modalMessage: string;
}

const TextContainer = styled(Container)`
  border-radius: 2px;
  background-color: var(--secondary_01);
  box-shadow: 0 4px 4px var(--neutral_10_op05);
  transform: translate(-50%, -50%);
`;

const StyleIcon = css`
  --padding: 4px;
  padding: var(--padding);
  transform: scale(2) translateY(calc(-50% + var(--padding) / 2));
  border-radius: 50%;
  fill: var(--neutral_01);
`;

const SuccessIcon = styled(CheckSVG)`
  ${StyleIcon};
  background-color: var(--semantic_success_01);
`;

const ErrorIcon = styled(CloseSVG)`
  ${StyleIcon};
  background-color: var(--accent_05);
`;

export const Modal = ({
  showModal,
  modalCallback,
  status,
  modalMessage,
}: ModalProps): JSX.Element => {
  const onKeyDownHandler = useCallback(
    event => {
      if (event.defaultPrevented) {
        return;
      }

      if (event.key === 'Escape' || event.key === 'Esc' || event.key === '27') {
        modalCallback();
      }
    },
    [modalCallback],
  );

  useKeyEvent(onKeyDownHandler, 'keydown');

  return (
    <>
      <Backdrop isOpen={showModal} />

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
          $p={{ de: '12px 24px' }}
          $g={{ de: '12px' }}
          $bs={{ de: 'border-box' }}
        >
          {successStatus(status) && <SuccessIcon />}
          {errorStatus(status) && <ErrorIcon />}
          <HeadingExtraLarge $txtClr="var(--neutral_11)">
            {successStatus(status) && ' Success!'}
            {errorStatus(status) && ' Error!'}
          </HeadingExtraLarge>
          <ParagraphSmall $txtClr="var(--neutral_12)">
            {modalMessage}
          </ParagraphSmall>
          <AppButton
            $size="medium"
            $variant={successStatus(status) ? 'flat' : 'alert'}
            $boxShadow
            $ital
            $bold
            aria-label="close modal"
            title="close modal button"
            onClick={modalCallback}
          >
            OK
          </AppButton>
        </TextContainer>
      )}
    </>
  );
};
