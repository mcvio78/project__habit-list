import { PageLayout, Container } from '../components/layout';
import { NavLinkIcon } from '../components/UI/Typography';
import { Header } from '../components/UI/Header';
import { Toolbar } from '../components/layout/Toolbar';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { useAuth } from '../hooks/';
import { ShowData } from '../components/UI/ShowData';

interface FilteredAccountData {
  ID: string;
  Username: string;
  Email: string;
}

export const Account = (): JSX.Element => {
  const { user } = useAuth();

  const filteredAccount: FilteredAccountData = {
    ID: user?.id || '',
    Username: user?.username || '',
    Email: user?.email || '',
  };

  const userData = Object.keys(filteredAccount).map((accountField: string) => (
    <ShowData
      key={accountField}
      fieldTitle={accountField}
      fieldValue={filteredAccount[accountField]}
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
        $ai={{ de: 'flex-start' }}
        $g={{ de: '30px' }}
      >
        {userData}
      </Container>
    </PageLayout>
  );
};
