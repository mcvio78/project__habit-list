import { useAuth } from '../../../hooks/useAuth';
import { Container } from '../../layout';
import { NavigationItem } from './NavigationItem';

export const NavigationItems = (): JSX.Element => {
  const { user } = useAuth();

  return (
    <Container as="nav">
      <Container
        as="ul"
        $fd={{ de: 'column' }}
        $g={{ de: '10px' }}
        $m={{ de: '20px 16px' }}
        $ai={{ de: 'center' }}
        $jc={{ de: 'center' }}
        $pl={{ de: 0 }}
      >
        {user && (
          <NavigationItem link="/account" ariaLabel="user account">
            Account
          </NavigationItem>
        )}
        <NavigationItem link="/ui" ariaLabel="application style">
          UI Style
        </NavigationItem>
        <NavigationItem link="/settings" ariaLabel="application settings">
          Settings
        </NavigationItem>
      </Container>
    </Container>
  );
};
