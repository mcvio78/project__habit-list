import { ReactNode } from 'react';
import { NavLinkProps } from 'react-router-dom';

import { NavLinkLarge } from '../Typography';

interface NavigationItemProps extends NavLinkProps {
  children: ReactNode;
}

export const NavigationItem = ({
  children,
  className,
  ...otherProps
}: NavigationItemProps): JSX.Element => {
  return (
    <li
      style={{ listStyleType: 'none' }}
      className={['navigation-item', className].join(' ')}
    >
      <NavLinkLarge {...otherProps}>{children}</NavLinkLarge>
    </li>
  );
};
