import {
  FC,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  MouseEventHandler,
  SVGProps,
} from 'react';
import { InputDate } from './InputDate';
import { InputWrapper } from '../InputWrapper';

interface AppInputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  id: InputHTMLAttributes<HTMLInputElement>['id'];
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
  onClickReset?: MouseEventHandler<HTMLInputElement> | undefined;
  selected: Date | null;
  onChange: (val: any) => void;
  onBlur: () => void;
  onClick: () => void;
}

export const AppInputDate = ({
  id,
  IconSVG,
  $label,
  onClickReset,
  ...otherProps
}: AppInputDateProps): JSX.Element => {
  return (
    <InputWrapper
      className="app-input-date"
      id={id}
      IconSVG={IconSVG}
      $label={$label}
      onClick={onClickReset}
    >
      <InputDate id={id} {...otherProps} />
    </InputWrapper>
  );
};
