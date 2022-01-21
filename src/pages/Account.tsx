import { PageLayout, Container } from '../components/layout';
import { NavLinkIcon } from '../components/UI/Typography';
import { Header } from '../components/UI/Header';
import { Toolbar } from '../components/layout/Toolbar';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { useAuth } from '../hooks/useAuth';
import { ShowData } from '../components/UI/ShowData';

export const Account = (): JSX.Element => {
  const { user } = useAuth();

  const filteredAccountData: Record<
    'ID' | 'Username' | 'Email',
    string | undefined
  > = {
    ID: user?.user_id,
    Username: user?.name,
    Email: user?.email,
  };

  const userData = Object.keys(filteredAccountData).map((key: string) => (
    <ShowData
      key={key}
      fieldTitle={key}
      fieldValue={filteredAccountData[key]}
    />
  ));

  return (
    <PageLayout>
      <Toolbar>
        <NavLinkIcon
          to="/"
          aria-label="navigation link to homepage"
          $ml={{ de: 'auto' }}
          $iconSdw
        >
          <HomeSVG />
        </NavLinkIcon>
      </Toolbar>
      <Header $header="Account" $subHeader="User information" />
      <Container
        $fd={{ de: 'column' }}
        $mt={{ de: '60px' }}
        $ai={{ de: 'center' }}
        $g={{ de: '30px' }}
      >
        {userData}
      </Container>
    </PageLayout>
  );
};
