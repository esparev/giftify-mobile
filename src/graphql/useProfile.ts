import { gql, useQuery } from '@apollo/client';

const useProfile = (username: string) => {
  const query = gql`
    query GetProfile($username: String!) {
      user(username: $username) {
        id
        username
        firstName
        lastName
        email
        avatar
      }
    }
  `;
  return useQuery(query, { variables: { username: username } });
};

export default useProfile;
