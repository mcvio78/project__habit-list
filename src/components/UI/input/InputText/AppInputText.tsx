import {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  MouseEventHandler,
  SVGProps,
} from 'react';

import { InputText } from './InputText';
import { InputWrapper } from '../InputWrapper';

interface AppInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  id: InputHTMLAttributes<HTMLInputElement>['id'];
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
  onClick?: MouseEventHandler<HTMLInputElement> | undefined;
}

export const AppInputText = ({
  id,
  IconSVG,
  $label,
  onClick,
  ...otherProps
}: AppInputTextProps): JSX.Element => {
  return (
    <InputWrapper
      className="app-input-text"
      id={id}
      IconSVG={IconSVG}
      $label={$label}
      onClick={onClick}
    >
      <InputText id={id} {...otherProps} />
    </InputWrapper>
  );
};
