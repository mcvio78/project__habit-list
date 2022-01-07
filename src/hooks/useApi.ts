import { useState } from 'react';
import { AxiosResponse, AxiosError } from 'axios';

type ApiFunction = (...args: any[]) => Promise<AxiosResponse>;

interface UseAPIReturn {
  isLoading: boolean;
  successStatus: boolean;
  data: AxiosResponse | null;
  error: string;
  request: (...args: any[]) => Promise<AxiosResponse | undefined>;
}

const isAxiosError = (candidate: any): candidate is AxiosError => {
  return candidate.isAxiosError === true;
};

export const useAPI = (apiFunction: ApiFunction): UseAPIReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState('');

  const request = async (...args: any[]) => {
    setData(null);
    setError('');
    try {
      setIsLoading(true);
      const response: AxiosResponse = await apiFunction(...args);
      if (response && (response.status === 200 || 201 || 204)) {
        setSuccessStatus(true);
      }
      setData(response.data);
      setIsLoading(false);
      return response;
    } catch (err) {
      if (isAxiosError(err)) {
        if (err?.response) {
          setError(err?.response?.data);
        } else if (err?.request) {
          setError('The request was made but no response was received');
        }
      } else if (err instanceof Error) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  };
  return { request, isLoading, successStatus, data, error };
};
