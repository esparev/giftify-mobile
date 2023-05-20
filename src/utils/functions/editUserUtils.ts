import * as Yup from 'yup';
import { UserProps } from '../../@types';

export const initialValues = (user: UserProps) => {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
  };
};

export const validationSchema = () => {
  return {
    firstName: Yup.string(),
    lastName: Yup.string(),
    username: Yup.string(),
    email: Yup.string().email(),
  };
};
