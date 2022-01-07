import { useState, Dispatch, SetStateAction } from 'react';
import { AxiosResponse, AxiosError } from 'axios';

type ApiFunction = (...args: any[]) => Promise<AxiosResponse>;

interface UseAPIReturn {
  isLoading: boolean;
  successStatus: boolean;
  data: AxiosResponse | null;
  errorStatus: boolean;
  setErrorStatus: Dispatch<SetStateAction<boolean>>;
  errorMessage: string;
  request: (...args: any[]) => Promise<AxiosResponse | undefined>;
}

const isAxiosError = (candidate: any): candidate is AxiosError => {
  return candidate.isAxiosError === true;
};

export const useAPI = (apiFunction: ApiFunction): UseAPIReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const request = async (...args: any[]) => {
    setIsLoading(false);
    setSuccessStatus(false);
    setData(null);
    setErrorStatus(false);
    setErrorMessage('');
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
          setErrorMessage(err?.response?.data);
          if (err.response.status) {
            setErrorStatus(true);
          }
        } else if (err?.request) {
          setErrorMessage('The request was made but no response was received');
          if (err.request.status) {
            setErrorStatus(true);
          }
        }
      } else if (err instanceof Error) {
        setErrorMessage(err.message);
        setErrorStatus(true);
      }
      setIsLoading(false);
    }
  };
  return {
    request,
    isLoading,
    successStatus,
    data,
    errorStatus,
    setErrorStatus,
    errorMessage,
  };
};
