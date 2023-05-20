import React, { useState } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { CartItemProps } from '../../@types';
import { TextSemiBold } from '../CustomText';
import { addQty, removeQty } from '../../utils/functions/qtyModifier';
import cartItem from './styles/cartItem';

const CartItem = (props: { cartItem: CartItemProps }) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [qty, setQty] = useState(props.cartItem.quantity);
  const [total, setTotal] = useState(props.cartItem.gift.price);

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
              onPress={() =>
                removeQty(qty, props.cartItem.gift.price, setQty, setTotal)
              }>
              <TextSemiBold style={cartItem.qtyItems}>-</TextSemiBold>
            </TouchableOpacity>
            <TextSemiBold style={cartItem.qtyItems}>{qty}</TextSemiBold>
            <TouchableOpacity
              style={cartItem.addQty}
              onPress={() =>
                addQty(qty, props.cartItem.gift.price, setQty, setTotal)
              }>
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
