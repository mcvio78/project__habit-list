import { Container } from '../layout';
import { B, HeadingMedium, It, ParagraphMedium } from './Typography';

interface ShowDataProps {
  fieldTitle: string;
  fieldValue: string | undefined;
  key: string;
}

export const ShowData = ({
  fieldTitle,
  fieldValue,
  key,
}: ShowDataProps): JSX.Element | null => {
  if (!fieldTitle || !fieldValue) return null;
  return (
    <Container $fd={{ de: 'column' }} $flxAs={{ de: 'flex-start' }} key={key}>
      <HeadingMedium $flxAs={{ de: 'flex-start' }} $txtSdw>
        <B>
          <It>{fieldTitle}</It>
        </B>
      </HeadingMedium>
      <ParagraphMedium>{fieldValue}</ParagraphMedium>
    </Container>
  );
};
