import { ChangeEventHandler } from 'react';

import { Container } from '../../layout';
import { Checkbox } from './Checkbox';
import { LabelMedium, B, It } from '../Typography';

export interface AppCheckboxProps {
  id: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  labelText: string;
}

export const AppCheckbox = ({
  id,
  checked,
  onChange,
  labelText,
}: AppCheckboxProps): JSX.Element => {
  return (
    <Container $ai={{ de: 'center' }}>
      <Checkbox
        id={id}
        checked={checked}
        onChange={onChange}
        $mr={{ de: '12px' }}
      />
      <LabelMedium htmlFor={id}>
        <B>
          <It>{labelText}</It>
        </B>
      </LabelMedium>
    </Container>
  );
};
