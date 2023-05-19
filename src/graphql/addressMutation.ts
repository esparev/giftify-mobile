import { gql } from '@apollo/client';

export const createAddressMutation = gql`
  mutation CreateAddress($data: CreateAddress!) {
    createAddress(data: $data) {
      id
    }
  }
`;

export const updateAddressMutation = gql`
  mutation UpdateAddress($id: UUID!, $data: UpdateAddress!) {
    updateAddress(id: $id, data: $data) {
      id
    }
  }
`;

export const deleteAddressMutation = gql`
  mutation DeleteAddress($id: UUID!) {
    deleteAddress(id: $id)
  }
`;
