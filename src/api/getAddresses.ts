import { envConfig, authConfig } from '../utils/config';

/**
 * Fetches the user's addresses data
 */
const getAddresses = async (userId: string, token: string) => {
  try {
    const addresses = await fetch(
      `${envConfig.apiV1BaseURL}/addresses/user/${userId}`,
      authConfig(token),
    );
    const addressesData = await addresses.json();

    return addressesData;
  } catch (error) {
    throw error;
  }
};

export default getAddresses;
