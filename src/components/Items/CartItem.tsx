import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { CartItemProps } from '../../@types';
import { TextSemiBold } from '../CustomText';
import { addQty, removeQty } from '../../utils/functions/qtyModifier';
import cartItem from './styles/cartItem';

const CartItem = (props: {
  cartItem: CartItemProps;
  onAddToCart: (
    giftId: string | undefined,
    quantity: number,
    price: number | undefined,
  ) => void;
  onRemoveFromCart: (
    giftId: string | undefined,
    quantity: number,
    price: number | undefined,
  ) => void;
}) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [qty, setQty] = useState(props.cartItem.quantity);
  const [total, setTotal] = useState(props.cartItem.gift.price);

  useEffect(() => {
    setTotal(Number((Number(total) * qty).toFixed(2)));
  }, []);

  return (
    <TouchableOpacity
      style={cartItem.container}
      onPress={() => navigation.push('Gift', { id: props.cartItem.gift.id })}>
      {/* Image */}
      <Image
        source={{ uri: props.cartItem.gift.image }}
        style={cartItem.image}
      />
      {/* Info */}
      <View style={cartItem.info}>
        <TextSemiBold style={cartItem.name}>
          {props.cartItem.gift.name}
        </TextSemiBold>
        {/* Footer */}
        <View style={cartItem.footer}>
          {/* Quantity Modifier */}
          <View style={cartItem.qtyModifier}>
            <TouchableOpacity
              style={cartItem.removeQty}
              onPress={() => {
                removeQty(qty, props.cartItem.gift.price, setQty, setTotal);
                props.onRemoveFromCart(
                  props.cartItem.gift.id,
                  1,
                  props.cartItem.gift.price,
                );
              }}>
              <TextSemiBold style={cartItem.qtyItems}>-</TextSemiBold>
            </TouchableOpacity>
            <TextSemiBold style={cartItem.qtyItems}>{qty}</TextSemiBold>
            <TouchableOpacity
              style={cartItem.addQty}
              onPress={() => {
                addQty(qty, props.cartItem.gift.price, setQty, setTotal);
                props.onAddToCart(
                  props.cartItem.gift.id,
                  1,
                  props.cartItem.gift.price,
                );
              }}>
              <TextSemiBold style={cartItem.qtyItems}>+</TextSemiBold>
            </TouchableOpacity>
          </View>
          {/* Price */}
          <TextSemiBold style={cartItem.total}>${total}</TextSemiBold>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
