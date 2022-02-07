import {
  FC,
  SVGProps,
  ComponentPropsWithoutRef,
  MouseEventHandler,
} from 'react';

import { InputText } from './InputText';
import { InputWrapper } from '../InputWrapper';

interface AppInputTextProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onClick'> {
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: string;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement> | undefined;
}

export const AppInputText = ({
  id,
  IconSVG,
  $label,
  onClick,
  className,
  ...otherProps
}: AppInputTextProps): JSX.Element => {
  return (
    <InputWrapper
      className={['app-input-text', className].join(' ')}
      id={id}
      IconSVG={IconSVG}
      $label={$label}
      onClick={onClick}
    >
      <InputText id={id} {...otherProps} />
    </InputWrapper>
  );
};
