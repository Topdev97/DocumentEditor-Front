import { PATH, STORAGE_KEY } from '@/constants';
import { API_ENDPOINTS } from '@/constants/api-endpoints';
import { handleShowError } from '@/utils';

export const logout = async () => {
  localStorage.clear();
  window.location.href = PATH.LOGIN;
};
