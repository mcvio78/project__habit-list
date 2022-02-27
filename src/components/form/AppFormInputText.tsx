import {
  FC,
  SVGProps,
  LabelHTMLAttributes,
  ComponentPropsWithoutRef,
  useEffect,
} from 'react';
import { useFormikContext, FormikProps } from 'formik';

import { AppInputText } from '../UI/input/inputText';
import { AppFormInputError } from './AppFormInputError';
import { Container } from '../layout';
import { resetFormFieldValue } from '../../utility/utils';

interface AppFormInputTextProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onClick'> {
  name: string;
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
}

export const AppFormInputText = ({
  name,
  id,
  className,
  ...otherProps
}: AppFormInputTextProps): JSX.Element => {
  const {
    handleChange,
    values,
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
  } = useFormikContext<FormikProps<keyof AppFormInputTextProps>>();

  useEffect(() => {
    return () => {
      setFieldValue(name, resetFormFieldValue(values[name]));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, setFieldValue]);

  return (
    <Container
      className={`app-form-input-text ${className}`}
      $fd={{ de: 'column' }}
      $w={{ de: '100%' }}
      {...otherProps}
    >
      <AppInputText
        id={id}
        onChange={handleChange(name)}
        value={values[name] || ''}
        onBlur={() => setFieldTouched(name)}
        onClick={() => setFieldValue(name, resetFormFieldValue(values[name]))}
        {...otherProps}
      />
      <AppFormInputError error={errors[name]} touched={touched[name]} />
    </Container>
  );
};
