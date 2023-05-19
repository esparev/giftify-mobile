import { gql, useQuery } from '@apollo/client';

const useAddresses = (userId: string) => {
  const query = gql`
    query GetAddresses($userId: UUID!) {
      addresses(userId: $userId) {
        id
        streetName
        streetName
        streetNumber
        postalCode
        city
        area
        locality
        country
      }
    }
  `;
  return useQuery(query, { variables: { userId: userId } });
};

export default useAddresses;
