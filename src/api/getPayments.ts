import { envConfig, authConfig } from '../utils/config';

/**
 * Fetches the user's payment methods data
 */
const getPayments = async (userId: string, token: string) => {
  try {
    const payments = await fetch(
      `${envConfig.apiV1BaseURL}/payment-methods/user/${userId}`,
      authConfig(token),
    );
    const paymentsData = await payments.json();

    return paymentsData;
  } catch (error) {
    throw error;
  }
};

export default getPayments;
