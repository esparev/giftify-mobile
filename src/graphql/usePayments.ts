import { gql, useQuery } from '@apollo/client';

const usePayments = (userId: string) => {
  const query = gql`
    query GetPayments($userId: UUID!) {
      paymentMethods(userId: $userId) {
        id
        alias
        last4
        network
      }
    }
  `;
  return useQuery(query, { variables: { userId: userId } });
};

export default usePayments;
