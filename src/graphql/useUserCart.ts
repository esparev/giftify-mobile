import { gql, useQuery } from '@apollo/client';

const useUserCart = (userId: string) => {
  const query = gql`
    query GetCartByUser($userId: UUID!) {
      userCart(userId: $userId) {
        id
        quantity
        total
        cartItems {
          id
          quantity
          gift {
            id
            name
            image
            price
          }
        }
      }
    }
  `;
  return useQuery(query, { variables: { userId: userId } });
};

export default useUserCart;
