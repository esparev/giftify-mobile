import { envConfig, authConfig } from '../utils/config';

/**
 * Fetches the user's cart data
 */
const getCart = async (userId: string, token: string) => {
  try {
    const cart = await fetch(
      `${envConfig.apiV1BaseURL}/carts/user/${userId}`,
      authConfig(token),
    );
    const cartData = await cart.json();

    return cartData;
  } catch (error) {
    throw error;
  }
};

export default getCart;
