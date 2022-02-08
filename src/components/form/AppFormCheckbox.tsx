import { ComponentPropsWithoutRef } from 'react';
import { useFormikContext } from 'formik';

import { AppFormInputError } from './AppFormInputError';
import { Container } from '../layout';
import { AppCheckbox } from '../UI/checkbox/';
import { resetFormFieldValue } from '../../utility/utils';

interface AppFormCheckboxProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'value'> {
  name: string;
  value: string | number | boolean | Date;
  $labelText: string;
  $showError?: boolean;
}

interface FormValues {
  values: {
    habitName: string;
    date: Date | null;
    habitType: boolean | null;
  };
}

export const AppFormCheckbox = ({
  name,
  value,
  $showError = true,
  ...otherProps
}: AppFormCheckboxProps): JSX.Element => {
  const { setFieldValue, values, errors, touched } =
    useFormikContext<FormValues>();

  return (
    <Container $fd={{ de: 'column' }} $w={{ de: '100%' }}>
      <AppCheckbox
        onChange={() => {
          setFieldValue(
            name,
            value === values[name] ? resetFormFieldValue(value) : value,
          );
        }}
        checked={values[name] === value}
        {...otherProps}
      />
      {$showError && (
        <AppFormInputError error={errors[name]} touched={touched[name]} />
      )}
    </Container>
  );
};
