import { FC, SVGProps, InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import { useFormikContext } from 'formik';

import { AppInputText } from '../UI/input/InputText';
import { AppFormInputError } from './AppFormInputError';
import { Container } from '../layout';

interface AppFormInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  id: InputHTMLAttributes<HTMLInputElement>['id'];
  name: string;
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
}

interface FormValues {
  values: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    passwordConfirmation: string;
    className?: string;
  };
}

export const AppFormInputText = ({
  name,
  id,
  className,
  ...otherProps
}: AppFormInputTextProps): JSX.Element => {
  const { handleChange, values, setFieldTouched, resetForm, errors, touched } =
    useFormikContext<FormValues>();

  return (
    <Container
      className={`app-form-input-text ${className}`}
      $fd={{ de: 'column' }}
      $w={{ de: '100%' }}
    >
      <AppInputText
        id={id}
        onChange={handleChange(name)}
        value={values[name] || ''}
        onBlur={() => setFieldTouched(name)}
        onClick={() => resetForm({ values: { ...values, [name]: '' } })}
        {...otherProps}
      />
      <AppFormInputError error={errors[name]} touched={touched[name]} />
    </Container>
  );
};
