import { gql } from '@apollo/client';

export const addToCartMutation = gql`
  mutation AddToCart($data: AddToCart!) {
    addToCart(data: $data) {
      id
    }
  }
`;

export const removeFromCartMutation = gql`
  mutation RemoveFromCart($data: RemoveFromCart!) {
    removeFromCart(data: $data)
  }
`;
