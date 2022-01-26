import { InputDate, InputDateProps } from './InputDate';
import { InputWrapper, InputWrapperProps } from '../InputWrapper';

interface AppInputDateProps
  extends InputDateProps,
    Omit<InputWrapperProps, 'children'> {}

export const AppInputDate = ({
  IconSVG,
  $label,
  id,
  onClick,
  ...otherProps
}: AppInputDateProps): JSX.Element => {
  return (
    <InputWrapper id={id} IconSVG={IconSVG} $label={$label} onClick={onClick}>
      <InputDate id={id} {...otherProps} />
    </InputWrapper>
  );
};
