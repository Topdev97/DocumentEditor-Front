import { REQUIRED_MESSAGE } from '@/constants';
import * as Yup from 'yup';
import { BASE_VALIDATION } from './base';

export const loginSchema = Yup.object().shape({
  email: BASE_VALIDATION.email,
  password: Yup.string().required(REQUIRED_MESSAGE),
});

export const ResetPasswordSchema = Yup.object().shape({
  email: BASE_VALIDATION.email,
});