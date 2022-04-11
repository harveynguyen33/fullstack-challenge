import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const BACKEND_DOMAIN = 'http://localhost:8000/';
export const ENDPOINTS = {
  getMovieList: 'api/v1/movies'
}

const request = <T>(config: AxiosRequestConfig): Promise<T> =>
  axios
    .request<T>(config)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error: AxiosError) => {
      try {
        const { response } = error;
        if (response) {
          const { data } = response;
          return Promise.reject(data);
        }
        return Promise.reject(error);
      } catch (e) {
        return Promise.reject(e);
      }
    });

const headers = () => {
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return header;
};

export const get = <T>(uri: string, queries?: unknown, additionalHeader = {}): Promise<T> => {
  const timestamp = new Date().getTime();
  const queryObj = queries as Record<string, unknown>;
  return request<T>({
    method: 'GET',
    url: BACKEND_DOMAIN + uri,
    headers: { ...headers(), ...additionalHeader },
    params: { ...queryObj, ts: timestamp },
  });
};
