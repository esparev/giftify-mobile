import { envConfig } from '../utils/config';

/**
 * Fetches the gift data for a given gift ID
 */
const getGift = async (id: string) => {
  try {
    const gift = await fetch(`${envConfig.apiV1BaseURL}/gifts/${id}`);
    const giftData = await gift.json();

    return giftData;
  } catch (error) {
    throw error;
  }
};

export default getGift;
