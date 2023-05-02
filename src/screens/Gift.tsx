import React, { useState } from 'react';
import Header from '../components/Header';
import { TouchableOpacity, View, Image } from 'react-native';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import gift from './styles/gift';

import gifts from '../mocks/gifts';
const giftItem = gifts[0];

const defaultGift = '../assets/static/default-gift.png';
const star = '../assets/icons/favorite-star.png';

const Gift = () => {
  const [activeButton, setActiveButton] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(giftItem.price);

  /**
   * Handle the type of the gift (delivery or pickup) and updates the active button
   * @param {string} type - Type of the gift (delivery or pickup)
   */
  const handleType = (type: string) => {
    const isDelivery = type === 'delivery' ? true : false;
    setActiveButton(isDelivery);
  };

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
    <View style={gift.main}>
      {/* Product */}
      <View style={gift.product}>
        {/* Header */}
        <Header title="Detalles" isNestedScreen />
        {/* Details */}
        <View style={gift.details}>
          {/* Image */}
          <Image
            source={{ uri: giftItem.image }}
            defaultSource={require(defaultGift)}
            style={gift.image}
          />
          {/* Info */}
          <View style={gift.info}>
            <TextSemiBold style={gift.name}>{giftItem.name}</TextSemiBold>
            {/* Meta */}
            <View style={gift.meta}>
              <Image source={require(star)} style={gift.ratingStar} />
              <TextRegular style={gift.metaText}>
                {giftItem.rating} | Buen empaque
              </TextRegular>
            </View>
          </View>
          {/* Description */}
          <TextRegular style={gift.description}>
            {giftItem.description}
          </TextRegular>
        </View>
        {/* Type */}
        <View style={gift.type}>
          <TextRegular style={gift.typeText}>Tipo</TextRegular>
          {/* Buttons */}
          <View style={gift.buttons}>
            <TouchableOpacity
              style={[
                gift.button,
                activeButton ? gift.buttonActive : gift.buttonInactive,
              ]}
              onPress={() => handleType('delivery')}>
              <TextRegular
                style={[
                  gift.buttonText,
                  activeButton
                    ? gift.buttonTextActive
                    : gift.buttonTextInactive,
                ]}>
                Entrega
              </TextRegular>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                gift.button,
                activeButton ? gift.buttonInactive : gift.buttonActive,
              ]}
              onPress={() => handleType('pickup')}>
              <TextRegular
                style={[
                  gift.buttonText,
                  activeButton
                    ? gift.buttonTextInactive
                    : gift.buttonTextActive,
                ]}>
                Recoger
              </TextRegular>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Footer */}
      <View style={gift.footer}>
        {/* Quantity */}
        <View style={gift.quantity}>
          <TextRegular style={gift.quantityText}>Cantidad</TextRegular>
          {/* Buttons */}
          <View style={gift.quantityModifier}>
            <TouchableOpacity
              style={gift.removeQuantity}
              onPress={removeQuantity}>
              <TextSemiBold style={gift.quantityItems}>-</TextSemiBold>
            </TouchableOpacity>
            <TextSemiBold style={gift.quantityItems}>{quantity}</TextSemiBold>
            <TouchableOpacity style={gift.addQuantity} onPress={addQuantity}>
              <TextSemiBold style={gift.quantityItems}>+</TextSemiBold>
            </TouchableOpacity>
          </View>
        </View>
        {/* Payment */}
        <View style={gift.payment}>
          <View style={gift.total}>
            <TextRegular style={gift.totalText}>Total:</TextRegular>
            <TextSemiBold style={gift.totalValue}>${total}</TextSemiBold>
          </View>
          <TouchableOpacity style={gift.checkoutButton}>
            <TextRegular style={gift.checkoutText}>Order</TextRegular>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Gift;
