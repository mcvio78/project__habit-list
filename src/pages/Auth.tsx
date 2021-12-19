import { PageLayout, Container } from '../components/layout';
import { NavLinkIcon } from '../components/Typography';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home.svg';
import { Header } from '../components/Header';

export const Auth = (): JSX.Element => (
  <PageLayout>
    <Container
      $w={{ de: '100%' }}
      $mih={{ de: '40px' }}
      $mt={{ de: '20px' }}
      $jc={{ de: 'flex-end' }}
      $ai={{ de: 'center' }}
    >
      <NavLinkIcon to="/" $iconSdw>
        <HomeSVG />
      </NavLinkIcon>
    </Container>
    <Header $header="Account" $subHeader="Login" />
  </PageLayout>
);
