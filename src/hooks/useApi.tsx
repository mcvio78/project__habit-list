import { useState, Dispatch, SetStateAction } from 'react';
import { AxiosResponse } from 'axios';

import { isAxiosError } from '../utility/request/axios';

type ApiFunction = (...args: any[]) => Promise<AxiosResponse>;

interface UseAPIReturn {
  isLoading: boolean;
  data: AxiosResponse['data'] | null;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  request: (...args: any[]) => Promise<AxiosResponse | undefined>;
}

export const useAPI = (apiFunction: ApiFunction): UseAPIReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const request = async (...args: any[]) => {
    setIsLoading(false);
    setData(null);
    setErrorMessage('');
    try {
      setIsLoading(true);
      const response: AxiosResponse = await apiFunction(...args);
      setData(response.data);
      setIsLoading(false);
      return response;
    } catch (err) {
      if (isAxiosError(err)) {
        if (err?.response) {
          setErrorMessage(err?.response?.data);
        } else if (err?.request) {
          setErrorMessage('The request was made but no response was received');
        }
      } else if (err instanceof Error) {
        setErrorMessage(err.message);
      }
      setIsLoading(false);
    }
  };
  return {
    request,
    isLoading,
    data,
    setErrorMessage,
    errorMessage,
  };
};
