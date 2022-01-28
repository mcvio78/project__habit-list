import { FC, SVGProps, ReactNode, InputHTMLAttributes } from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as CloseSVG } from '../../../assets/icons/icon-close_24dp.svg';
import { Container } from '../../layout/Container';
import { LabelLarge } from '../Typography';
import { Button } from '../buttons/Button';

export interface InputWrapperProps {
  id: InputHTMLAttributes<HTMLInputElement>['id'];
  IconSVG?: FC<SVGProps<SVGSVGElement>>;
  $label?: string;
  onClick?: any;
  children: ReactNode | undefined;
  className?: string;
}

const LayoutInputWrapper = styled(Container)`
  border: none;
  border-radius: 4px;
  outline: 2px solid var(--accent_04);
  background-color: var(--secondary_01);

  &:focus-within {
    outline: 3px solid var(--accent_04);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: var(--neutral_09);
    fill-opacity: 0.2;
  }
`;

export const InputWrapper = ({
  IconSVG,
  $label,
  id,
  children,
  onClick,
  className,
}: InputWrapperProps): JSX.Element => {
  return (
    <Container $fd={{ de: 'column' }} className={`input-wrapper ${className}`}>
      {$label && (
        <LabelLarge htmlFor={id} $flxAs={{ de: 'flex-start' }}>
          {$label}
        </LabelLarge>
      )}
      <LayoutInputWrapper
        $ai={{ de: 'center' }}
        $jc={{ de: 'space-between' }}
        $p={{ de: '5px' }}
      >
        {IconSVG && <IconSVG />}
        {children}
        <Button
          aria-label="reset form field"
          title="reset"
          $bkgCol="var(--secondary_03)"
        >
          <CloseSVG onClick={onClick} />
        </Button>
      </LayoutInputWrapper>
    </Container>
  );
};
