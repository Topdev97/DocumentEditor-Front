import { ERROR_CODE, PATH, STORAGE_KEY } from '@/constants';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { handleShowError } from './common';

interface ApiConfig {
  baseURL: string | undefined;
}

const createApi = (config: ApiConfig): AxiosInstance => {
  const instance = axios.create({
    ...config,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Add interceptors and other configuration here

  const setAuthorizationHeader = (request: AxiosRequestConfig | any, token: string) => {
    request.headers.Authorization = `Bearer ${token}`;
  };

  const onRequest = (config: AxiosRequestConfig | any) => {
    const token = localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);
    token && setAuthorizationHeader(config, token);
    return config;
  };

  const onRequestError = (error: AxiosError) => {
    return Promise.reject(error);
  };

  const onResponse = (response: AxiosResponse) => {
    return response;
  };


  const onResponseError = (error: AxiosError | any) => {
    if (error.isAxiosError) {
      if (error.code === ERROR_CODE.ERR_NETWORK) {
        console.log('error', ERROR_CODE.ERR_NETWORK);
      }

      switch (error.response?.status) {
        case ERROR_CODE.UNPROCESSABLE_ENTITY:
          handleShowError(error?.response);
          break;

        case ERROR_CODE.INTERNAL_SERVER_ERROR:
          if (error?.config?.method === 'get') {
            handleShowError(error?.response);
          }
          break;

        case ERROR_CODE.NOT_FOUND:
          handleShowError(error?.response);
          break;

        default:
          return Promise.reject(error.response);
      }
    }

    return Promise.reject(error.response);
  };

  instance.interceptors.request.use(onRequest, onRequestError);
  instance.interceptors.response.use(onResponse, onResponseError);

  return instance;
};

export const apiInstance = createApi({
  baseURL: process.env.API_ENDPOINT,
});
