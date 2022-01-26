import { ChangeEventHandler } from 'react';

import { InputText } from './InputText';
import { InputWrapper, InputWrapperProps } from '../InputWrapper';

interface AppInputTextProps extends Omit<InputWrapperProps, 'children'> {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: () => void;
  value: string;
}

export const AppInputText = ({
  IconSVG,
  $label,
  id,
  onClick,
  ...otherProps
}: AppInputTextProps): JSX.Element => {
  return (
    <InputWrapper id={id} IconSVG={IconSVG} $label={$label} onClick={onClick}>
      <InputText id={id} {...otherProps} />
    </InputWrapper>
  );
};
