import { AxiosError } from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isAxiosError = (candidate: any): candidate is AxiosError => {
  return candidate.isAxiosError;
};
