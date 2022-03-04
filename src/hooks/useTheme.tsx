import { useContext, useCallback } from 'react';

import { ThemeContext } from '../auth/context';
import { themeStorage } from '../theme/storage';
import { themes } from '../config/themes';

interface UseTheme {
  theme: string;
  setDefaultTheme: () => void;
  setSelectedTheme: (args: string) => void;
  setThemeIfStored: () => void;
}

export const useTheme = (): UseTheme => {
  const { themeState } = useContext(ThemeContext);
  if (themeState === undefined) {
    throw new Error('themeState was used outside of its Provider');
  }
  const [theme, setTheme] = themeState;

  const setThemeCB = useCallback(
    selectedTheme => {
      setTheme(selectedTheme);
    },
    [setTheme],
  );

  const setDefaultTheme = () => {
    // eslint-disable-next-line prefer-destructuring
    document.body.dataset.theme = themes[0];
    themeStorage.removeTheme();
    setThemeCB(themes[0]);
  };

  const setSelectedTheme = (selectedTheme: string) => {
    document.body.dataset.theme = selectedTheme;
    themeStorage.storeTheme(selectedTheme);
    setThemeCB(selectedTheme);
  };

  const setThemeIfStored = () => {
    const storedTheme = themeStorage.getTheme();

    if (storedTheme) {
      setSelectedTheme(storedTheme);
    } else {
      setDefaultTheme();
    }
  };

  return { theme, setDefaultTheme, setSelectedTheme, setThemeIfStored };
};
