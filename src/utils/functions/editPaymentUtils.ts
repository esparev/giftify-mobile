import * as Yup from 'yup';
import { PaymentProps } from '../../@types';

export const initialValues = (payment: PaymentProps) => {
  return {
    alias: payment.alias,
  };
};

export const validationSchema = () => {
  return {
    alias: Yup.string(),
  };
};
