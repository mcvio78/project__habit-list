import { FC, SVGProps, ChangeEventHandler } from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as CloseSVG } from '../../../assets/icons/icon-close_24dp.svg';
import { Container } from '../../layout';
import { InputText } from './InputText';
import { LabelLarge } from '../Typography';
import { Button } from '../buttons/Button';

interface InputProps {
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: () => void;
  onClick?: () => void;
}

const InputWrapper = styled(Container).attrs({
  className: 'input-wrapper',
})`
  border: none;
  border-radius: 4px;
  outline: 2px solid var(--accent_04);
  background-color: var(--secondary_01);

  &:focus-within {
    outline: 3px solid var(--accent_04);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: var(--neutral_09);
    fill-opacity: 0.2;
  }
`;

export const AppInputText = ({
  IconSVG,
  $label,
  id,
  onClick,
  ...otherProps
}: InputProps): JSX.Element => {
  return (
    <Container $fd={{ de: 'column' }}>
      {$label && (
        <LabelLarge htmlFor={id} $flxAs={{ de: 'flex-start' }}>
          {$label}
        </LabelLarge>
      )}
      <InputWrapper
        $ai={{ de: 'center' }}
        $jc={{ de: 'space-between' }}
        $p={{ de: '5px' }}
      >
        {IconSVG && <IconSVG />}
        <InputText id={id} {...otherProps} />
        <Button
          aria-label="reset form field"
          title="reset"
          $bkgCol="var(--secondary_03)"
        >
          <CloseSVG onClick={onClick} />
        </Button>
      </InputWrapper>
    </Container>
  );
};
