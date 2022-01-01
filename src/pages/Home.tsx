import { PageLayout, Container } from '../components/layout';
import { ParagraphLarge, NavLinkLarge, B, It } from '../components/Typography';
import { AppButton } from '../components/UI/buttons';
import { Header } from '../components/Header';
import { SideDrawer } from '../components/UI/SideDrawer';

export const Home = (): JSX.Element => {
  return (
    <PageLayout>
      <Container
        $w={{ de: '100%' }}
        $mih={{ de: '40px' }}
        $bs={{ de: 'border-box' }}
        $jc={{ de: 'space-between' }}
        $ai={{ de: 'center' }}
      >
        <NavLinkLarge to="/auth" $txtSdw>
          <It>Sign In</It>
        </NavLinkLarge>
        <SideDrawer />
      </Container>
      <Header
        $header={
          <span>
            My
            <br />
            Habits List
          </span>
        }
      />
      <Container
        $m={{ de: 'auto 0 30px 0' }}
        $fd={{ de: 'column' }}
        $ai={{ de: 'center' }}
        $g={{ de: '30px' }}
      >
        <ParagraphLarge $txtSdw>
          <i>Start organizing your life!</i>
        </ParagraphLarge>
        <AppButton
          $lg
          $nb
          $boxSdw
          aria-label="create habits button"
          title="create habits"
        >
          <B>
            <It>Create Habits</It>
          </B>
        </AppButton>
      </Container>
    </PageLayout>
  );
};
