import * as Yup from 'yup';

export const initialValues = () => {
  return {
    alias: '',
    cardholderName: '',
    number: '',
    expiryMonth: 0,
    expiryYear: 0,
    cvv: '',
    userId: '',
  };
};

export const validationSchema = () => {
  return {
    alias: Yup.string().required('Por favor ingrese el alias de la tarjeta'),
    cardholderName: Yup.string().required('Por favor ingrese el titular de la tarjeta'),
    number: Yup.string().required('Por favor ingrese el número de la tarjeta'),
    cvv: Yup.string().required('Por favor ingrese el CVV'),
  };
};

export const parseDate = (dateString: string) => {
  const [monthString, yearString] = dateString.split('/');
  const month = parseInt(monthString, 10);
  const year = parseInt(yearString, 10);

  return { month, year };
};

export const formatCardNumber = (input: string) => {
  const cardNumber = input.replace(/\D/g, ''); // Remove non-numeric characters
  const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 '); // Add a space after every 4 digits

  return formattedCardNumber;
};
