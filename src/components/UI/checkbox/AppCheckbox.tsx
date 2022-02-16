import { ComponentPropsWithoutRef } from 'react';

import { Container } from '../../layout';
import { Checkbox } from './Checkbox';
import { LabelMedium } from '../Typography';

export interface AppCheckboxProps extends ComponentPropsWithoutRef<'input'> {
  $labelText: string;
}

export const AppCheckbox = ({
  id,
  className,
  $labelText,
  ...otherProps
}: AppCheckboxProps): JSX.Element => {
  return (
    <Container
      $ai={{ de: 'center' }}
      className={['app-checkbox', className].join(' ')}
    >
      <Checkbox id={id} {...otherProps} $mr={{ de: '12px' }} />
      <LabelMedium htmlFor={id} $ital $bold>
        {$labelText}
      </LabelMedium>
    </Container>
  );
};
