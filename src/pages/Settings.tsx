import { MouseEvent, useEffect } from 'react';

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
import { themeStorage } from '../theme/storage';

export const Settings = (): JSX.Element => {
  useEffect(() => {
    const localTheme = themeStorage.getTheme();
    if (localTheme) document.body.dataset.theme = localTheme;
    else document.body.dataset.theme = 'light';
  }, []);

  const handleOnChange = (event: MouseEvent<HTMLInputElement>) => {
    /* eslint-disable */
    console.log('event: ', event);
    themeStorage.storeTheme((event.target as HTMLInputElement).value);
  };

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
              onClick={() => themeStorage.removeTheme()}
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
              onClick={handleOnChange}
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
