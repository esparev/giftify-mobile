import { gql, useQuery } from '@apollo/client';

const useGiftsByCategory = (category: string | undefined) => {
  const query = gql`
    query GetGiftsByCategory($category: String!) {
      giftsByCategory(category: $category) {
        id
        name
        image
        rating
        price
      }
    }
  `;
  return useQuery(query, { variables: { category: category } });
};

export default useGiftsByCategory;
