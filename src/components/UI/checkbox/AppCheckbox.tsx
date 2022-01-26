import { Container } from '../../layout';
import { Checkbox } from './Checkbox';
import { LabelMedium, B, It } from '../Typography';

interface AppCheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  labelText: string;
  forLblAttr: string;
}

export const AppCheckbox = ({
  id,
  checked,
  onChange,
  labelText,
  forLblAttr,
}: AppCheckboxProps): JSX.Element => {
  return (
    <Container $ai={{ de: 'center' }}>
      <Checkbox
        id={id}
        checked={checked}
        onChange={onChange}
        $mr={{ de: '12px' }}
      />
      <LabelMedium htmlFor={forLblAttr}>
        <B>
          <It>{labelText}</It>
        </B>
      </LabelMedium>
    </Container>
  );
};
