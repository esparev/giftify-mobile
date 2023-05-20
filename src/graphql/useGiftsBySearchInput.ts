import { gql, useQuery } from '@apollo/client';

const useGiftsBySearchInput = (searchInput: string | undefined) => {
  const query = gql`
    query GetGiftsBySearchInput($searchInput: String!) {
      giftsBySearchInput(searchInput: $searchInput) {
        id
        name
        image
        rating
        price
      }
    }
  `;
  return useQuery(query, { variables: { searchInput: searchInput } });
};

export default useGiftsBySearchInput;
