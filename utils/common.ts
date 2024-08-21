import { DOMAIN_REGEX } from '@/constants/regex';
import { get } from 'lodash';
import { toast } from 'react-toastify';

export const handleShowError = (error: any) => {
  if (typeof error === 'string') {
    toast.error(error);
    return;
  }
  toast.error(error?.data?.details || error?.data?.error );
};

export const generateSpecificationIconPath = (iconName?: string) => {
  return `/icons/${iconName}.svg`;
};

export const copyToClipboard = async (content: string) => {
  try {
    await navigator.clipboard.writeText(content);
    return true;
  } catch (err) {
    console.error('Failed to copy: ', err);
    return false;
  }
};

export const sortArray = (
  array: any[],
  options?: { sortBy?: string; isAscending?: boolean; isSortByDate?: boolean },
) => {
  const { sortBy = '', isAscending = true, isSortByDate = false } = options || {};

  return array.sort((a: any, b: any) => {
    if (!sortBy) {
      return isAscending ? a - b : b - a;
    }

    if (isSortByDate) {
      return isAscending
        ? new Date(get(a, sortBy)).getTime() - new Date(get(b, sortBy)).getTime()
        : new Date(get(b, sortBy)).getTime() - new Date(get(a, sortBy)).getTime();
    }

    return isAscending ? get(a, sortBy) - get(b, sortBy) : get(b, sortBy) - get(a, sortBy);
  });
};

export const isUrl = (string: string) => {
  if (typeof string !== 'string') return false;

  return !!DOMAIN_REGEX.test(string);
};
