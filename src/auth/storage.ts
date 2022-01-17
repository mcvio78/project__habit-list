/* eslint-disable no-console */
const key = 'authToken';

const storeToken = (authToken: string): string | void => {
  try {
    localStorage.setItem(key, authToken);
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};

const getToken = (): string | null | undefined => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};

const removeToken = (): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};

export const authStorage = { storeToken, getToken, removeToken };
