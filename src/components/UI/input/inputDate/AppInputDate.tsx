import {
  ComponentPropsWithoutRef,
  FC,
  SVGProps,
  MouseEventHandler,
} from 'react';
import { InputDate } from './InputDate';
import { InputWrapper } from '../InputWrapper';

interface AppInputDateProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onClick'> {
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: string;
  selected: Date | null;
  onChange: (val: any) => void;
  onClick: MouseEventHandler<SVGSVGElement> | undefined;
  className?: string;
}

export const AppInputDate = ({
  id,
  IconSVG,
  $label,
  onClick,
  className,
  ...otherProps
}: AppInputDateProps): JSX.Element => {
  return (
    <InputWrapper
      className={['app-input-date', className].join(' ')}
      id={id}
      IconSVG={IconSVG}
      $label={$label}
      onClick={onClick}
    >
      <InputDate id={id} {...otherProps} />
    </InputWrapper>
  );
};
