import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextSemiBold } from '../CustomText';
import cartItem from './styles/cartItem';

import gifts from '../../mocks/gifts';
const giftItem = gifts[0];

const CartItem = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(giftItem.price);

  /**
   * Add quantity of the gift and updates the quantity and total values
   */
  const addQuantity = () => {
    setQuantity(quantity + 1);
    const totalValue = Number((giftItem.price * (quantity + 1)).toFixed(2));
    setTotal(totalValue);
  };

  /**
   * Remove quantity of the gift and updates the quantity and total values
   */
  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      const totalValue = Number((giftItem.price * (quantity - 1)).toFixed(2));
      setTotal(totalValue);
    }
  };

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
          <View style={cartItem.quantityModifier}>
            <TouchableOpacity
              style={cartItem.removeQuantity}
              onPress={removeQuantity}>
              <TextSemiBold style={cartItem.quantityItems}>-</TextSemiBold>
            </TouchableOpacity>
            <TextSemiBold style={cartItem.quantityItems}>
              {quantity}
            </TextSemiBold>
            <TouchableOpacity
              style={cartItem.addQuantity}
              onPress={addQuantity}>
              <TextSemiBold style={cartItem.quantityItems}>+</TextSemiBold>
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
