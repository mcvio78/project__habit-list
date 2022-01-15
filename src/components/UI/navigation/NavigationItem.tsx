import { ReactNode } from 'react';

import { NavLinkLarge } from '../Typography';

interface NavigationItemProps {
  children: ReactNode;
  link: string;
  ariaLabel: string;
}

export const NavigationItem = ({
  children,
  link,
  ariaLabel,
}: NavigationItemProps): JSX.Element => {
  return (
    <li style={{ listStyleType: 'none' }}>
      <NavLinkLarge to={link} aria-label={ariaLabel}>
        {children}
      </NavLinkLarge>
    </li>
  );
};
