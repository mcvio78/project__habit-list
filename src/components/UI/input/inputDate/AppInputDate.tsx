import { FC, InputHTMLAttributes, LabelHTMLAttributes, SVGProps } from 'react';
import { InputDate } from './InputDate';
import { InputWrapper } from '../InputWrapper';

interface AppInputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  id: InputHTMLAttributes<HTMLInputElement>['id'];
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
  selected: Date | null;
  onChange: (val: any) => void;
  onBlur: () => void;
  onClick: () => void;
}

export const AppInputDate = ({
  id,
  IconSVG,
  $label,
  onClick,
  ...otherProps
}: AppInputDateProps): JSX.Element => {
  return (
    <InputWrapper
      className="app-input-date"
      id={id}
      IconSVG={IconSVG}
      $label={$label}
      onClick={onClick}
    >
      <InputDate id={id} {...otherProps} />
    </InputWrapper>
  );
};
