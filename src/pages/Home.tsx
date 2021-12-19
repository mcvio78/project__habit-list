import { PageLayout, Container } from '../components/layout';
import {
  Display1,
  ParagraphLarge,
  LabelLarge,
  NavLinkLarge,
  B,
  It,
} from '../components/Typography';
import { ButtonHamburger } from '../components/buttons/ButtonHamburger';
import { Button } from '../components/buttons/Button';

export const Home = () => {
  return (
    <PageLayout>
      <Container
        $w={{ de: '100%' }}
        $mxw={{ lg: '800px' }}
        $mih={{ de: '40px' }}
        $bs={{ de: 'border-box' }}
        $jc={{ de: 'space-between' }}
        $ai={{ de: 'center' }}
        $mt={{ de: '20px' }}
      >
        <NavLinkLarge to="/auth" $txtSdw>
          <It>Sign In</It>
        </NavLinkLarge>
        <ButtonHamburger aria-label="open settings menu button" />
      </Container>
      <Display1 $txtSdw>
        My
        <br />
        Habits List
      </Display1>
      <Container
        $m={{ de: 'auto 0 30px 0' }}
        $fd={{ de: 'column' }}
        $ai={{ de: 'center' }}
        $g={{ de: '30px' }}
      >
        <ParagraphLarge $txtSdw>
          <i>Start organizing your life!</i>
        </ParagraphLarge>
        <Button
          $lg
          $nb
          $boxSdw
          aria-label="create habits button"
          title="create habits"
        >
          <LabelLarge $txtSdw>
            <B>
              <It>Create Habits</It>
            </B>
          </LabelLarge>
        </Button>
      </Container>
    </PageLayout>
  );
};
