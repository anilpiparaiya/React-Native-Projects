import {useState} from 'react';
import axiosAPI from '../api/axiosAPI';
import {AxiosHeaders, AxiosResponse, RawAxiosRequestHeaders} from 'axios';

type HeaderType = RawAxiosRequestHeaders | AxiosHeaders | undefined;

const useMutation = <T, RT>(
  URL: string,
  {data, headers}: {data?: T; headers?: HeaderType},
) => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const postNetworkCall = async () => {
    setLoading(true);
    try {
      const response = await axiosAPI?.post<any, AxiosResponse<RT, any>>?.(
        URL,
        data,
        {
          headers,
        },
      );
      return response;
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return {postNetworkCall, loading, error};
};

export default useMutation;