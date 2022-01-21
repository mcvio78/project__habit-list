import { ReactNode } from 'react';

import { Container } from './index';

interface ToolbarProps {
  children: ReactNode;
}

export const Toolbar = ({ children }: ToolbarProps): JSX.Element => {
  return (
    <Container
      $w={{ de: '100%' }}
      $mxw={{ de: '1200px' }}
      $mih={{ de: '40px' }}
      $jc={{ de: 'space-between' }}
      $ai={{ de: 'center' }}
    >
      {children}
    </Container>
  );
};
