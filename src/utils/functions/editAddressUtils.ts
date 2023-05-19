import * as Yup from 'yup';
import { AddressProps } from '../../@types';

export const initialValues = (address: AddressProps) => {
  return {
    streetName: address.streetName,
    streetNumber: address.streetNumber,
    area: address.area,
    postalCode: address.postalCode,
    city: address.city,
    locality: address.locality,
    country: address.country,
  };
};

export const validationSchema = () => {
  return {
    streetName: Yup.string(),
    area: Yup.string(),
    postalCode: Yup.string(),
    city: Yup.string(),
    locality: Yup.string(),
    country: Yup.string(),
  };
};
