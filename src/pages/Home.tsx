import { PageLayout } from '../components/layout/PageLayout';
import { Container } from '../components/layout/Container';
import { Display1, ParagraphLarge } from '../components/Typography';
import { ButtonHamburger } from '../components/buttons/ButtonHamburger';
import { ButtonLarge } from '../components/buttons/ButtonLarge';

export const Home = () => {
  return (
    <PageLayout>
      <Container
        mxw="800px"
        bs="border-box"
        jc="space-between"
        mt="28px"
        p="0 28px"
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
      <Container mt="auto" mb="30px" fd="column" ai="center">
        <ButtonLarge aria-label="create habits button" title="create habits">
          Create Habits
        </ButtonLarge>
        <ButtonLarge
          aria-label="go to user guide"
          title="go to quick start user guide"
          mt="30px"
        >
          Quick Start
        </ButtonLarge>
      </Container>
    </PageLayout>
  );
};
