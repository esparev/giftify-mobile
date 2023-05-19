import { gql } from '@apollo/client';

export const createPaymentMutation = gql`
  mutation CreatePayment($data: CreatePaymentMethod!) {
    createPaymentMethod(data: $data) {
      id
    }
  }
`;

export const updatePaymentMutation = gql`
  mutation UpdatePayment($id: UUID!, $data: UpdatePaymentMethod!) {
    updatePaymentMethod(id: $id, data: $data) {
      id
    }
  }
`;
