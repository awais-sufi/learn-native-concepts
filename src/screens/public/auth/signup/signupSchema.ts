// signupSchema.ts
import * as yup from 'yup';

export const signupSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
