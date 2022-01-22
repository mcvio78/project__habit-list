import { ChangeEvent } from 'react';

import { PageLayout, Container } from '../components/layout';
import {
  B,
  HeadingMedium,
  It,
  NavLinkIcon,
  ParagraphMedium,
} from '../components/UI/Typography';
import { Header } from '../components/UI/Header';
import { Toolbar } from '../components/layout/Toolbar';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { useTheme } from '../hooks/useTheme';

export const Settings = (): JSX.Element => {
  const { setDefaultTheme, setSelectedTheme } = useTheme();

  return (
    <PageLayout>
      <Toolbar>
        <NavLinkIcon
          to="/"
          aria-label="navigation link to homepage"
          $ml={{ de: 'auto' }}
          $iconSdw
        >
          <HomeSVG />
        </NavLinkIcon>
      </Toolbar>
      <Header $header="Settings" $subHeader="UI Style" />
      <Container $fd={{ de: 'column' }} $mt={{ de: '60px' }}>
        <Container $fd={{ de: 'column' }} $g={{ de: '12px' }}>
          <HeadingMedium $txtSdw>
            <B>
              <It>Themes</It>
            </B>
          </HeadingMedium>
          <Container $ai={{ de: 'center' }}>
            <input
              type="checkbox"
              id="light-theme"
              name="light-theme"
              value="light"
              onChange={() => setDefaultTheme()}
            />
            <ParagraphMedium>
              <B>
                <It>Light</It>
              </B>
            </ParagraphMedium>
          </Container>
          <Container>
            <input
              type="checkbox"
              id="dark-theme"
              name="dark-theme"
              value="dark"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setSelectedTheme(event.target.value)
              }
            />
            <ParagraphMedium>
              <B>
                <It>Dark</It>
              </B>
            </ParagraphMedium>
          </Container>
        </Container>
      </Container>
    </PageLayout>
  );
};
