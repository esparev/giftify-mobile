import { gql, useQuery } from '@apollo/client';

const useHome = (username: string) => {
  const query = gql`
    query GetHome($username: String!) {
      gifts {
        id
        name
        image
        rating
        price
      }
      user(username: $username) {
        id
        avatar
      }
    }
  `;
  return useQuery(query, { variables: { username: username } });
};

export default useHome;
