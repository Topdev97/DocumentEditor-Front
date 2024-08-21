import { REQUIRED_MESSAGE } from '@/constants';
import { isUrl } from '@/utils';
import * as Yup from 'yup';

export const BASE_VALIDATION = {
  email: Yup.string().required(REQUIRED_MESSAGE).email('Invalid email format'),
  url: Yup.string().test('url', 'The URL is invalid', (value: any) => {
    if (!value) return true;
    return isUrl(value);
  }),
};
