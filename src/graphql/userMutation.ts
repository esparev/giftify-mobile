import { gql } from '@apollo/client';

export const createUserMutation = gql`
  mutation CreateUser($data: CreateUser!) {
    createUser(data: $data) {
      id
    }
  }
`;

export const updateUserMutation = gql`
  mutation UpdateUser($username: String!, $data: UpdateUser!) {
    updateUser(username: $username, data: $data) {
      id
    }
  }
`;
