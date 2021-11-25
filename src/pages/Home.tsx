import React from 'react';
import styled from 'styled-components';

import { PageLayout } from '../components/layout/PageLayout';
import { Display1, ParagraphLarge } from '../components/Typograpy';

export const Home = () => {
  const HomeLayout = styled(PageLayout)`
    > :first-child {
      align-self: flex-start;
      margin-left: 20px;
    }
  `;

  return (
    <HomeLayout>
      <ParagraphLarge italic shadow>
        *not backed up
      </ParagraphLarge>
      <Display1 shadow>
        My
        <br />
        Habits List
      </Display1>
    </HomeLayout>
  );
};
