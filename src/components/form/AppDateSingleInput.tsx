import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useFormikContext } from 'formik';
import { DateSingleInput } from '@datepicker-react/styled';

interface AppDateSingleInputProps {
  name: string;
}

interface FormValues {
  values: {
    habitName: string;
    date: Date | null;
  };
}

export const AppDateSingleInput = ({
  name,
}: AppDateSingleInputProps): JSX.Element => {
  const [showDatepicker, setShowDatepicker] = useState(false);
  const { setFieldValue, values } = useFormikContext<FormValues>();

  return (
    <ThemeProvider
      theme={{
        breakpoints: ['32em', '48em', '64em'],
        reactDatepicker: {
          daySize: [36, 40],
          fontFamily: 'inherit, system-ui, -apple-system',
          colors: {
            accessibility: '#D80249',
          },
          dateSingleDatepickerWrapperPosition: 'relative',
          inputColor: 'var(--neutral_14)',
          inputLabelDisplay: 'flex',
          inputMinWidth: '60px',
          inputMinHeight: '28px',
          inputPadding: '0 5px',
          inputLabelPosition: '',
          inputCalendarWrapperPosition: 'relative',
          navButtonIconHeight: '24px',
          inputCalendarIconHeight: '24px',
          navButtonIconWidth: '24px',
          inputCalendarIconWidth: '24px',
        },
      }}
    >
      <DateSingleInput
        vertical
        date={values[name] || null}
        onDateChange={({ date }) => setFieldValue(name, date)}
        onFocusChange={focusedInput => setShowDatepicker(focusedInput)}
        showDatepicker={showDatepicker}
      />
    </ThemeProvider>
  );
};
