import { STORAGE_KEY } from '@/constants';
import { getLocalStorageWithoutParsing } from './local-storage';

const access_token = getLocalStorageWithoutParsing(STORAGE_KEY.ACCESS_TOKEN);

export const TmMagazineApiFetch = (url: string, body?: {}, method?: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(access_token);
      const response = await fetch(url, {
        method: method ? method : body ? 'POST' : 'GET',
        ...(body ? { body: JSON.stringify(body) } : {}),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (response.status !== 200 && response?.status !== 201) {
        throw response;
      }
      const responseData = await response.json();
      resolve(responseData);
    } catch (error) {
      reject(error);
    }
  });
};
