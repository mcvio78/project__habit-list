import { FC, SVGProps } from 'react';
import { useFormikContext } from 'formik';

import { AppInputText } from '../UI/Input';
import { AppFormInputError } from './AppFormInputError';
import { Container } from '../layout';

interface AppFormFieldProps {
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: string;
  id: string;
  placeholder?: string;
  type: 'text' | 'email' | 'password';
  name: string;
  autocapitalize?: 'off' | 'on' | 'sentences' | 'words' | 'characters' | 'none';
  spellcheck?: boolean;
}

interface FormValues {
  values: {
    email: string;
    password: string;
  };
}

export const AppFormField = ({
  name,
  ...otherProps
}: AppFormFieldProps): JSX.Element => {
  const { handleChange, values, setFieldTouched, resetForm, errors, touched } =
    useFormikContext<FormValues>();

  return (
    <Container $fd={{ de: 'column' }} $w={{ de: '100%' }}>
      <AppInputText
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        name={name}
        value={values[name] || ''}
        onClick={() => resetForm({ values: { ...values, [name]: '' } })}
        {...otherProps}
      />
      <AppFormInputError error={errors[name]} touched={touched[name]} />
    </Container>
  );
};
