import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { useFormikContext } from 'formik';

import { AppButton, AppButtonProps } from '../UI/button';

interface AppFormSubmitProps
  extends AppButtonProps,
    ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}

export const AppFormSubmit = ({
  children,
  ...otherProps
}: AppFormSubmitProps): JSX.Element => {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton onClick={() => handleSubmit()} {...otherProps}>
      {children}
    </AppButton>
  );
};
