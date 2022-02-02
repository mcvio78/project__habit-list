import { Container } from '../layout';
import { B, HeadingMedium, It, ParagraphMedium } from './Typography';

interface ShowDataProps {
  fieldTitle: string;
  fieldValue: string | undefined;
}

export const ShowData = ({
  fieldTitle,
  fieldValue,
}: ShowDataProps): JSX.Element | null => {
  if (!fieldTitle || !fieldValue) return null;
  return (
    <Container
      $fd={{ de: 'column' }}
      $flxAs={{ de: 'flex-start' }}
      $ai={{ de: 'flex-start' }}
    >
      <HeadingMedium $txtSdw>
        <B>
          <It>{fieldTitle}</It>
        </B>
      </HeadingMedium>
      <ParagraphMedium>{fieldValue}</ParagraphMedium>
    </Container>
  );
};
