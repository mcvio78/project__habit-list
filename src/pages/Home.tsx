import { PageLayout } from '../components/layout/PageLayout';
import { Container } from '../components/layout/Container';
import { Display1, ParagraphLarge } from '../components/Typography';
import { HamburgerButton } from '../components/buttons/HamburgerButton';
import { BigButton } from '../components/buttons/BigButton';

export const Home = () => {
  return (
    <PageLayout>
      <Container
        w="100%"
        bs="border-box"
        jc="space-between"
        mt="28px"
        p="0 28px"
      >
        <ParagraphLarge italic shadowText>
          *not backed up
        </ParagraphLarge>
        <HamburgerButton aria-label="open settings menu button" shadowBox />
      </Container>
      <Display1 shadowText>
        My
        <br />
        Habits List
      </Display1>
      <Container fd="column" mt="auto" mb="30px" h="192px" jc="space-between">
        <BigButton
          aria-label="create an habit"
          title="create habits"
          italic
          shadowBox
          shadowText
        >
          Create Habits
        </BigButton>
        <BigButton
          aria-label="go to user guide"
          title="quick start"
          italic
          shadowBox
          shadowText
        >
          Quick Start
        </BigButton>
      </Container>
    </PageLayout>
  );
};
