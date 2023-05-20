import React from 'react';
import { FlatList } from 'react-native';
import { CartItemListProps } from '../../@types/index';
import CartItem from '../Items/CartItem';

const CartList = (props: CartItemListProps): JSX.Element => {
  const { cartItems } = props;

  return (
    <FlatList
      data={cartItems}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={cartItem => String(cartItem.id)}
      renderItem={({ item }) => <CartItem cartItem={item} />}
    />
  );
};

export default CartList;
