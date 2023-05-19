import { gql, useQuery } from '@apollo/client';

const useGift = (id: string) => {
  const query = gql`
    query GetGift($id: UUID!) {
      gift(id: $id) {
        name
        image
        rating
        price
        description
      }
    }
  `;
  return useQuery(query, { variables: { id: id } });
};

export default useGift;
