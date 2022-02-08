import { Container } from '../layout';
import { B, HeadingMedium, It, ParagraphMedium } from './Typography';

interface ShowDataProps {
  fieldTitle: string;
  fieldValue: string;
}

export const ShowData = ({
  fieldTitle,
  fieldValue,
}: ShowDataProps): JSX.Element | null => {
  if (!fieldValue) return null;
  return (
    <Container $fd={{ de: 'column' }} $ai={{ de: 'flex-start' }}>
      <HeadingMedium $flxAs={{ de: 'flex-start' }} $txtSdw>
        <B>
          <It>{fieldTitle}</It>
        </B>
      </HeadingMedium>
      <ParagraphMedium>{fieldValue}</ParagraphMedium>
    </Container>
  );
};
