import { ParagraphMedium } from '../Typography';

interface AppFormErrorMessageProps {
  touched: boolean;
  error: string;
}

export const AppFormInputError = ({
  touched,
  error,
}: AppFormErrorMessageProps): JSX.Element | null => {
  if (!touched || !error) return null;
  return (
    <ParagraphMedium $txtClr="var(--semantic_error_01)" $m={{ de: '6px' }}>
      {error}
    </ParagraphMedium>
  );
};
