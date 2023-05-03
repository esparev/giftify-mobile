import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextSemiBold } from '../CustomText';
import { addQty, removeQty } from '../../utils/functions/qtyModifier';
import cartItem from './styles/cartItem';

import gifts from '../../mocks/gifts';
const giftItem = gifts[0];

const CartItem = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(giftItem.price);

  return (
    <TouchableOpacity
      style={cartItem.container}
      onPress={() => navigation.push('Gift')}>
      {/* Image */}
      <Image source={{ uri: giftItem.image }} style={cartItem.image} />
      {/* Info */}
      <View style={cartItem.info}>
        <TextSemiBold style={cartItem.name}>{giftItem.name}</TextSemiBold>
        {/* Footer */}
        <View style={cartItem.footer}>
          {/* Quantity Modifier */}
          <View style={cartItem.qtyModifier}>
            <TouchableOpacity
              style={cartItem.removeQty}
              onPress={() => removeQty(qty, giftItem.price, setQty, setTotal)}>
              <TextSemiBold style={cartItem.qtyItems}>-</TextSemiBold>
            </TouchableOpacity>
            <TextSemiBold style={cartItem.qtyItems}>{qty}</TextSemiBold>
            <TouchableOpacity
              style={cartItem.addQty}
              onPress={() => addQty(qty, giftItem.price, setQty, setTotal)}>
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
