import * as Yup from 'yup';

export const initialValues = () => {
  return {
    streetName: '',
    streetNumber: '',
    area: '',
    postalCode: '',
    city: '',
    locality: '',
    country: '',
    userId: '',
  };
};

export const validationSchema = () => {
  return {
    streetName: Yup.string().required('Por favor ingrese la calle y número'),
    area: Yup.string().required('Por favor ingrese la colonia'),
    postalCode: Yup.string().required('Por favor ingrese el código postal'),
    city: Yup.string().required('Por favor ingrese la ciudad'),
    locality: Yup.string().required('Por favor ingrese el estado'),
    country: Yup.string().required('Por favor ingrese el país'),
  };
};

export const extractStreetDetails = (
  address: string,
): { streetName: string; streetNumber: string } => {
  const regex = /^(.*\b(?:\w+\W+)*\w+)\s+(\d+)\s*$/; // Matches the street name followed by the street number at the end
  const match = address.match(regex);
  if (match) {
    const streetName = match[1].trim(); // Extracts the street name and trims leading/trailing spaces
    const streetNumber = match[2]; // Extracts the street number
    return { streetName: streetName, streetNumber: streetNumber };
  } else {
    return { streetName: '', streetNumber: '' }; // No street details found
  }
};
