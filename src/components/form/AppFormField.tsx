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

export const AppFormField = ({
  name,
  ...otherProps
}: AppFormFieldProps): JSX.Element => {
  const {
    handleChange,
    values,
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
  } = useFormikContext<string>();

  return (
    <Container $fd={{ de: 'column' }} $g={{ de: '10px' }}>
      <AppInputText
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        name={name}
        value={values[name]}
        onClick={() => setFieldValue(name, '', false)}
        {...otherProps}
      />
      <AppFormInputError error={errors[name]} touched={touched[name]} />
    </Container>
  );
};
