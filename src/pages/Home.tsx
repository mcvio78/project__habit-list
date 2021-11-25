import React from 'react';
import styled from 'styled-components';

import { PageLayout } from '../components/layout/PageLayout';
import { Display1, ParagraphLarge } from '../components/Typography';
import { HamburgerButton } from '../components/HamburgerButton';

export const Home = () => {
  const HomeLayout = styled(PageLayout)`
    > :first-child {
      align-self: flex-start;
    }
  `;

  const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-top: 28px;
    padding: 0 28px;
  `;

  return (
    <HomeLayout>
      <Container>
        <ParagraphLarge italic shadow>
          *not backed up
        </ParagraphLarge>
        <HamburgerButton />
      </Container>
      <Display1 shadow>
        My
        <br />
        Habits List
      </Display1>
    </HomeLayout>
  );
};
