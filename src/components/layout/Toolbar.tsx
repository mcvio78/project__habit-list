import { ReactNode } from 'react';

import { Container } from './index';

interface ToolbarProps {
  children: ReactNode;
  className?: string;
}

export const Toolbar = ({ children, className }: ToolbarProps): JSX.Element => {
  return (
    <Container
      className={['toolbar', className].join(' ')}
      $w={{ de: '100%' }}
      $mxw={{ de: '1200px' }}
      $mih={{ de: '64px' }}
      $jc={{ de: 'space-between' }}
      $ai={{ de: 'center' }}
      $p={{ de: '24px 16px 0' }}
      $bs={{ de: 'border-box' }}
    >
      {children}
    </Container>
  );
};
