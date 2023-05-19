import { gql } from '@apollo/client';

const paymentMutation = gql`
  mutation CreatePayment($data: CreatePaymentMethod!) {
    createPaymentMethod(data: $data) {
      id
    }
  }
`;

export default paymentMutation;
