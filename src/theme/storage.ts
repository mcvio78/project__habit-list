/* eslint-disable no-console */
const key = 'theme';

const storeTheme = (theme: string): string | void => {
  try {
    localStorage.setItem(key, theme);
  } catch (error) {
    console.log('Error storing selected theme', error);
  }
};

const getTheme = (): string | null | undefined => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log('Error getting selected theme', error);
  }
};

const removeTheme = (): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Error removing theme', error);
  }
};

export const themeStorage = { storeTheme, getTheme, removeTheme };
