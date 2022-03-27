import { ComponentPropsWithoutRef, FC, SVGProps } from 'react';
import { useFormikContext, FormikProps } from 'formik';
import { formatISO, fromUnixTime, getUnixTime } from 'date-fns';

import { AppInputDate } from '../UI/input/inputDate';
import { AppFormInputError } from './AppFormInputError';
import { Container } from '../layout';
import { dateToTsUTC } from '../../utility/utils';
import { initialSelectedDateObj } from '../../pages/Create';

interface AppFormInputDateProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onClick'> {
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: string;
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
      className={['app-form-input-date', className].join(' ')}
      $fd={{ de: 'column' }}
    >
      <AppInputDate
        selected={
          values[name].selectedDateUTS &&
          fromUnixTime(values[name].selectedDateUTS)
        }
        onChange={val => {
          setFieldValue(name, {
            selectedDateString: val.toString(),
            selectedDateISO: formatISO(val),
            selectedDateUTS: getUnixTime(val),
            selectedDateTsUTC: dateToTsUTC(val),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          });
        }}
        onBlur={() => setFieldTouched(name)}
        onClick={() => setFieldValue(name, initialSelectedDateObj)}
        {...otherProps}
      />
      {errors[name] && (
        <AppFormInputError
          error={errors[name].selectedDateUTS}
          touched={touched[name]}
        />
      )}
    </Container>
  );
};
