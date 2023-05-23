import { envConfig, authConfig } from '../utils/config';

/**
 * Fetches the home page data for the user
 */
const getHome = async (username: string, token: string) => {
  try {
    const user = await fetch(
      `${envConfig.apiV1BaseURL}/users/${username}`,
      authConfig(token),
    );
    const userData = await user.json();
    const gifts = await fetch(`${envConfig.apiV1BaseURL}/gifts`);
    const giftsData = await gifts.json();
    
    return { user: userData, gifts: giftsData };
  } catch (error) {
    throw error;
  }
};

export default getHome;
