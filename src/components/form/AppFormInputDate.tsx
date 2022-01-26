import { FC, SVGProps } from 'react';
import { useFormikContext } from 'formik';

import { AppInputDate } from '../UI/input/inputDate/AppInputDate';
import { AppFormInputError } from './AppFormInputError';
import { Container } from '../layout';

interface AppFormFieldProps {
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: string;
  id: string;
  placeholder?: string;
  type: 'text' | 'email' | 'password' | 'date';
  name: string;
}

interface FormValues {
  values: {
    habitName: string;
    date: Date | null;
  };
}

export const AppFormInputDate = ({
  name,
  ...otherProps
}: AppFormFieldProps): JSX.Element => {
  const { setFieldValue, values, setFieldTouched, resetForm, errors, touched } =
    useFormikContext<FormValues>();

  return (
    <Container $fd={{ de: 'column' }} $w={{ de: '100%' }}>
      <AppInputDate
        selected={values[name]}
        onChange={val => {
          setFieldValue(name, val);
        }}
        onBlur={() => setFieldTouched(name)}
        onClick={() => resetForm({ values: { ...values, [name]: null } })}
        {...otherProps}
      />
      <AppFormInputError error={errors[name]} touched={touched[name]} />
    </Container>
  );
};
