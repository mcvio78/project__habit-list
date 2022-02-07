import { ComponentPropsWithoutRef, FC, SVGProps } from 'react';
import { InputDate } from './InputDate';
import { InputWrapper } from '../InputWrapper';

interface AppInputDateProps extends ComponentPropsWithoutRef<'input'> {
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: string;
  selected: Date | null;
  onChange: (val: any) => void;
  onClick: () => void;
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
