import { gql } from '@apollo/client';

const addressMutation = gql`
  mutation CreateAddress($data: CreateAddress!) {
    createAddress(data: $data) {
      id
    }
  }
`;

export default addressMutation;
