import { useState } from 'react';
import { AxiosResponse, AxiosError } from 'axios';

interface ApiFunctionReturn {
  isLoading: boolean;
  data: AxiosResponse | null;
  error: AxiosError | null;
  request: () => Promise<unknown>;
}

export const useApi = async (
  apiFunction: (...args: (string | number)[]) => Promise<AxiosResponse>,
): Promise<ApiFunctionReturn> => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const request = async (...args: (string | number)[]) => {
    try {
      setIsLoading(true);
      const response = await apiFunction(...args);
      setData(response.data);
      setIsLoading(false);
      return response;
    } catch (err) {
      const isAxiosError = (candidate: any): candidate is AxiosError => {
        return candidate.isAxiosError === true;
      };
      if (isAxiosError(err)) {
        setError(err?.response?.data);
      }
      setIsLoading(false);
      return err;
    }
  };

  return { request, isLoading, data, error };
};
