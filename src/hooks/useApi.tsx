import { useState, Dispatch } from 'react';
import { AxiosResponse } from 'axios';

import { isAxiosError } from '../utility/request/axios';

type ApiFunction = (...args: any[]) => Promise<AxiosResponse>;

interface UseAPI {
  isLoading: boolean;
  data: AxiosResponse['data'] | null;
  status: number | null;
  setStatus: Dispatch<number | null>;
  message: string;
  setMessage: Dispatch<string>;
  request: (...args: any[]) => Promise<AxiosResponse | undefined>;
}

export const useAPI = (apiFunction: ApiFunction): UseAPI => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Date | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');

  const request = async (...args: any[]) => {
    setIsLoading(false);
    setData(() => null);
    setStatus(null);
    setMessage('');
    try {
      setIsLoading(true);
      const response: AxiosResponse = await apiFunction(...args);
      setData(() => response.data);
      setStatus(response.status);
      setMessage(response.statusText);
      return response;
    } catch (err) {
      if (isAxiosError(err)) {
        if (err?.response) {
          setStatus(err?.response.status);
          setMessage(err?.response?.data.message);
        } else if (err?.request) {
          setStatus(err?.request.status);
          setMessage('The request was made but no response was received');
        }
      } else if (err instanceof Error) {
        setStatus(null);
        setMessage(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    request,
    isLoading,
    data,
    status,
    setStatus,
    message,
    setMessage,
  };
};
