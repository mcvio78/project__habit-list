import { FC, SVGProps } from 'react';
import { useFormikContext, FormikProps } from 'formik';

import { AppInputDate } from '../UI/input/inputDate';
import { AppFormInputError } from './AppFormInputError';
import { Container } from '../layout';
import { resetFormFieldValue } from '../../utility/utils';

interface AppFormInputDateProps {
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: string;
  id: string;
  placeholder?: string;
  type: 'text' | 'email' | 'password' | 'date';
  name: string;
  className?: string;
}

export const AppFormInputDate = ({
  name,
  className,
  ...otherProps
}: AppFormInputDateProps): JSX.Element => {
  const { setFieldValue, values, setFieldTouched, errors, touched } =
    useFormikContext<FormikProps<keyof AppFormInputDateProps>>();

  return (
    <Container
      className={`app-form-input-date ${className}`}
      $fd={{ de: 'column' }}
      $w={{ de: '100%' }}
    >
      <AppInputDate
        selected={values[name]}
        onChange={val => {
          setFieldValue(name, val);
        }}
        onBlur={() => setFieldTouched(name)}
        onClick={() => setFieldValue(name, resetFormFieldValue(values[name]))}
        {...otherProps}
      />
      <AppFormInputError error={errors[name]} touched={touched[name]} />
    </Container>
  );
};
