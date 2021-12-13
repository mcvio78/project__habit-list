import { PageLayout } from '../components/layout/PageLayout';
import { Container } from '../components/layout/Container';
import { Display1, ParagraphLarge } from '../components/Typography';
import { ButtonHamburger } from '../components/buttons/ButtonHamburger';
import { ButtonLarge } from '../components/buttons/ButtonLarge';

export const Home = () => {
  return (
    <PageLayout>
      <Container
        w={{ de: '100%' }}
        mxw={{ lg: '800px' }}
        bs={{ de: 'border-box' }}
        jc={{ de: 'space-between' }}
        mt={{ de: '28px' }}
      >
        <ParagraphLarge it txtSdw>
          Sign In
        </ParagraphLarge>
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
        <ButtonLarge aria-label="create habits button" title="create habits">
          Create Habits
        </ButtonLarge>
      </Container>
    </PageLayout>
  );
};
