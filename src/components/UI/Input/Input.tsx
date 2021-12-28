import { useState, FC, SVGProps } from 'react';
import styled from 'styled-components';

import { ReactComponent as CloseSVG } from '../../../assets/icons/icon-close_24dp.svg';
import { Container } from '../../layout';
import { InputText } from './InputText';
import { LabelLarge } from '../../Typography';

interface InputProps {
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  placeholder?: string;
  $label?: string;
  type: 'text' | 'email' | 'password';
  name: string;
  id: string;
}

const InputWrapper = styled(Container)`
  border: none;
  border-radius: 4px;
  outline: var(--inp-wrp-std-outl);
  background-color: var(--clr-se-v01);

  svg {
    width: 24px;
    height: 24px;
    fill: var(--inp-ico-std-clr);
    fill-opacity: 0.2;
  }
`;

export const Input = ({
  IconSVG,
  placeholder,
  $label,
  type,
  name,
  id,
}: InputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

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
        className="inputWrapper"
      >
        {IconSVG && <IconSVG />}
        <InputText
          value={inputValue}
          onChange={event => {
            setInputValue(event.target.value);
          }}
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
        />
        <CloseSVG
          onClick={() => {
            setInputValue('');
          }}
        />
      </InputWrapper>
    </Container>
  );
};
