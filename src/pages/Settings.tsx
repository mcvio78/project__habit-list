import { PageLayout, Container } from '../components/layout';
import { HeadingMedium, NavLinkIcon, B, It } from '../components/UI/Typography';
import { Header } from '../components/UI/Header';
import { Toolbar } from '../components/layout/Toolbar';
import { ReactComponent as HomeSVG } from '../assets/icons/icon-home_24dp.svg';
import { useTheme } from '../hooks/useTheme';
import { AppCheckbox } from '../components/UI/checkbox/AppCheckbox';
import { themes } from '../config/constants/themes';

export const Settings = (): JSX.Element => {
  const { theme, setDefaultTheme, setSelectedTheme } = useTheme();

  const themeCheckboxes = themes.map((themeName, index) => (
    <AppCheckbox
      id={`${themeName}-theme-id`}
      checked={themeName === theme}
      onChange={
        index === 0 ? setDefaultTheme : () => setSelectedTheme(themeName)
      }
      labelText={`${themeName}-theme`}
    />
  ));

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
          {themeCheckboxes}
        </Container>
      </Container>
    </PageLayout>
  );
};
