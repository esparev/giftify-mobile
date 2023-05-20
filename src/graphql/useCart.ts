import { gql, useQuery } from '@apollo/client';

const useCartByUser = (username: string) => {
  const query = gql`
    query GetCartByUser($username: String!) {
      user(username: $username) {
        id
        cart {
          id
        }
      }
    }
  `;
  return useQuery(query, { variables: { username: username } });
};

export default useCartByUser;
