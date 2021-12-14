import { PageLayout } from '../components/layout/PageLayout';
import { Container } from '../components/layout/Container';
import { Display1, LabelLarge, ParagraphLarge } from '../components/Typography';
import { ButtonHamburger } from '../components/buttons/ButtonHamburger';
import { Button } from '../components/buttons/Button';

export const Home = () => {
  return (
    <PageLayout>
      <Container
        w={{ de: '100%' }}
        mxw={{ lg: '800px' }}
        bs={{ de: 'border-box' }}
        jc={{ de: 'space-between' }}
        ai={{ de: 'center' }}
        mt={{ de: '28px' }}
      >
        <Button
          tb
          title="registration or access button"
          aria-label="log in / sign up button"
        >
          <LabelLarge it txtSdw>
            Sign In
          </LabelLarge>
        </Button>
        <ButtonHamburger aria-label="open settings menu button" />
      </Container>
      <Display1 txtSdw>
        My
        <br />
        Habits List
      </Display1>
      <Container
        m={{ de: 'auto 0 30px 0' }}
        fd={{ de: 'column' }}
        ai={{ de: 'center' }}
        g={{ de: '30px' }}
      >
        <ParagraphLarge it txtSdw>
          Start organizing your life!
        </ParagraphLarge>
        <Button
          lg
          nb
          boxSdw
          aria-label="create habits button"
          title="create habits"
        >
          <LabelLarge it txtSdw>
            Create Habits
          </LabelLarge>
        </Button>
      </Container>
    </PageLayout>
  );
};
