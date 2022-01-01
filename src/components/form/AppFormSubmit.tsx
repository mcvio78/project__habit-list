import { useFormikContext } from 'formik';

import { AppButton, AppButtonProps } from '../UI/buttons';

interface AppFormSubmitProps extends AppButtonProps {
  children: string;
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
