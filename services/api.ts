import { getLocalStorageWithoutParsing } from '@/utils/local-storage';
import { STORAGE_KEY } from '@/constants';
import { TmMagazineApiFetch } from '@/utils/fetch-API';
import axios from 'axios';

const access_token = getLocalStorageWithoutParsing(STORAGE_KEY.ACCESS_TOKEN);
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const createUser = async (fullName: string, email: string, password: string, zipcode:string) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/api/public/user/new-user`,
      {
        fullName,
        email,
        password,
        zipcode
      },
    );
    return response.data;
  } catch (e) {
    return null;
  }
};

export const sign = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/api/public/user/sign-in`,
      {
        email,
        password
      },
    );
    return response.data;
  } catch (e) {
    return '';
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/api/public/user/forgotPassword`,
      {
        email
      },
    );
    return response.data;
  } catch (e) {
    return null;
  }
};

export const verifyEmail = async (mail: string, code: string) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/api/public/user/verifyEmail`,
      {
        mail,
        code
      },
    );
    return response.data;
  } catch (e) {
    return '';
  }
};

export const confirmForgetPasswordLink = async (_id: string, secret: string) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/api/public/user/confirmForgetLink`,
      {
        _id,
        secret
      },
    );
    return response.data;
  } catch (e) {
    return '';
  }
};

export const upgradePassword = async (_id: string, password: string) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/api/public/user/upgradePassword`,
      {
        _id,
        password
      },
    );
    return response.data;
  } catch (e) {
    return '';
  }
};



