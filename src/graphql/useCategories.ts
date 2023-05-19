import { gql, useQuery } from '@apollo/client';

const useCategories = () => {
  const query = gql`
    query GetPayments {
      categories {
        id
        name
        hexColor
        image
      }
    }
  `;
  return useQuery(query);
};

export default useCategories;
