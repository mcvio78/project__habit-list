import { useContext } from 'react';

import { AuthContext } from '../auth/context';
import { themeStorage } from '../theme/storage';
import { themes } from '../config/themes';

interface UseThemeReturn {
  theme: string;
  setDefaultTheme: () => void;
  setSelectedTheme: (args: string) => void;
}

export const useTheme = (): UseThemeReturn => {
  const { themeState } = useContext(AuthContext);
  const [theme, setTheme] = themeState;

  const setDefaultTheme = () => {
    // eslint-disable-next-line prefer-destructuring
    document.body.dataset.theme = themes[0];
    themeStorage.removeTheme();
    setTheme(themes[0]);
  };

  const setSelectedTheme = (selectedTheme: string) => {
    document.body.dataset.theme = selectedTheme;
    themeStorage.storeTheme(selectedTheme);
    setTheme(selectedTheme);
  };

  return { theme, setDefaultTheme, setSelectedTheme };
};
