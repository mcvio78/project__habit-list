import { ReactNode } from 'react';

import { Container } from './index';

interface ToolbarProps {
  children: ReactNode;
}

export const Toolbar = ({ children }: ToolbarProps): JSX.Element => {
  return (
    <Container
      $w={{ de: '100%' }}
      $mih={{ de: '40px' }}
      $fd={{ de: 'row-reverse' }}
      $jc={{ de: 'space-between' }}
      $ai={{ de: 'center' }}
    >
      {children}
    </Container>
  );
};
