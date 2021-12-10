import { PageLayout } from '../components/layout/PageLayout';
import { Container } from '../components/layout/Container';
import { Display1, ParagraphLarge } from '../components/Typography';
import { ButtonHamburger } from '../components/buttons/ButtonHamburger';
import { ButtonLarge } from '../components/buttons/ButtonLarge';

export const Home = () => {
  return (
    <PageLayout>
      <Container
        mxw={{ lg: '800px' }}
        bs={{ de: 'border-box' }}
        jc={{ de: 'space-between' }}
        mt={{ de: '28px' }}
        p={{ de: '0 28px' }}
      >
        <ParagraphLarge it txtSdw>
          *not backed up
        </ParagraphLarge>
        <ButtonHamburger aria-label="open settings menu button" />
      </Container>
      <Display1 txtSdw>
        My
        <br />
        Habits List
      </Display1>
      <Container
        mt={{ de: 'auto' }}
        mb={{ de: '30px' }}
        fd={{ de: 'column' }}
        ai={{ de: 'center' }}
      >
        <ButtonLarge aria-label="create habits button" title="create habits">
          Create Habits
        </ButtonLarge>
        <ButtonLarge
          aria-label="go to user guide"
          title="go to quick start user guide"
          mt={{ de: '30px' }}
        >
          Quick Start
        </ButtonLarge>
      </Container>
    </PageLayout>
  );
};
