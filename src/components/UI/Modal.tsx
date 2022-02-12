import { useCallback } from 'react';
import styled, { css } from 'styled-components/macro';

import { Backdrop } from './Backdrop';
import { Container } from '../layout';
import { HeadingExtraLarge, ParagraphSmall, It, B } from './Typography';
import { AppButton } from './button';
import { ReactComponent as CloseSVG } from '../../assets/icons/icon-close_24dp.svg';
import { ReactComponent as CheckSVG } from '../../assets/icons/icons-check_24dp.svg';
import { useKeyEvent } from '../../hooks/useKeyEvent';

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
  background-color: greenyellow; /* Todo: replace */
`;

const ErrorIcon = styled(CloseSVG)`
  ${StyleIcon};
  background-color: var(--accent_05);
`;

const successStatus = (status: number | null): boolean => {
  switch (status) {
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
    case 205:
    case 206:
      return true;
    default:
      return false;
  }
};

const errorStatus = (status: number | null): boolean => {
  switch (status) {
    case 0:
    case 400:
    case 401:
    case 402:
    case 403:
    case 404:
    case 405:
    case 406:
    case 407:
    case 408:
    case 409:
    case 410:
    case 411:
    case 412:
    case 414:
    case 415:
    case 416:
    case 417:
    case 418:
    case 422:
    case 425:
    case 428:
    case 429:
    case 431:
    case 451:
    case 499:
    case 500:
    case 502:
    case 503:
    case 504:
    case 505:
    case 508:
    case 511:
    case 521:
    case 525:
      return true;
    default:
      return false;
  }
};

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
      <Backdrop isOpen={showModal} setIsOpen={modalCallback} />

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
    </>
  );
};
