import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { GiftProps, GiftScreenProps } from '../@types';
import getGift from '../api/getGift';
import useCartByUser from '../graphql/useCart';
import { addToCartMutation } from '../graphql/cartMutation';
import { getData } from '../storage';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import { handleType, addQty, removeQty } from '../utils/functions/qtyModifier';
import giftStyle from './styles/gift';

const star = '../assets/icons/favorite-star.png';

let userUsername: string;

(async () => {
  const userData = await getData();
  userUsername = userData.user.username;
})();

const Gift = (props: GiftScreenProps) => {
  const { route: { params: { id } } } = props; // prettier-ignore
  const isFocused = useIsFocused();
  const { data: cartData } = useCartByUser(userUsername);
  const [loading, setLoading] = useState(true);
  const [gift, setGift] = useState<GiftProps>();
  const [giftImage, setGiftImage] = useState('https://i.imgur.com/2wChz0k.png');
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);
  const [activeBtn, setActiveBtn] = useState(true);
  const [addToCart] = useMutation(addToCartMutation);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const cartId = cartData?.user?.cart?.id;
  const userId = cartData?.user?.id;

  const handleAddToCart = () => {
    const data = { giftId: id, cartId: cartId, quantity: qty };
    addToCart({ variables: { data: data } });
  };

  const loadData = async () => {
    try {
      const gift = await getGift(id);
      setGift(gift);
      setGiftImage(gift.image);
      setLoading(false);
      setTotal(gift.price);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    (async () => {
      await loadData();
    })();
  }, [isFocused]);

  return (
    <View style={giftStyle.main}>
      {/* Product */}
      <View style={giftStyle.product}>
        {/* Header */}
        <Header title="Detalles" isNestedScreen />
        {/* Details */}
        <View style={giftStyle.details}>
          {/* Image */}
          <Image source={{ uri: giftImage }} style={giftStyle.image} />
          {/* Info */}
          <View style={giftStyle.info}>
            <TextSemiBold style={giftStyle.name}>{gift?.name}</TextSemiBold>
            {/* Meta */}
            <View style={giftStyle.meta}>
              <Image source={require(star)} style={giftStyle.ratingStar} />
              <TextRegular style={giftStyle.metaText}>
                {gift?.rating} | Buen empaque
              </TextRegular>
            </View>
          </View>
          {/* Description */}
          <TextRegular style={giftStyle.description}>
            {gift?.description}
          </TextRegular>
        </View>
        {/* Type */}
        <View style={giftStyle.type}>
          <TextRegular style={giftStyle.typeText}>Tipo</TextRegular>
          {/* Buttons */}
          <View style={giftStyle.buttons}>
            <TouchableOpacity
              style={[
                giftStyle.btn,
                activeBtn ? giftStyle.btnActive : giftStyle.btnInactive,
              ]}
              onPress={() => handleType('delivery', setActiveBtn)}>
              <TextRegular
                style={[
                  giftStyle.btnText,
                  activeBtn
                    ? giftStyle.btnTextActive
                    : giftStyle.btnTextInactive,
                ]}>
                Entrega
              </TextRegular>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                giftStyle.btn,
                activeBtn ? giftStyle.btnInactive : giftStyle.btnActive,
              ]}
              onPress={() => handleType('pickup', setActiveBtn)}>
              <TextRegular
                style={[
                  giftStyle.btnText,
                  activeBtn
                    ? giftStyle.btnTextInactive
                    : giftStyle.btnTextActive,
                ]}>
                Recoger
              </TextRegular>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Footer */}
      <View style={giftStyle.footer}>
        {/* Quantity */}
        <View style={giftStyle.qty}>
          <TextRegular style={giftStyle.qtyText}>Cantidad</TextRegular>
          {/* Buttons */}
          <View style={giftStyle.qtyModifier}>
            <TouchableOpacity
              style={giftStyle.removeQty}
              onPress={() => removeQty(qty, gift?.price, setQty, setTotal)}>
              <TextSemiBold style={giftStyle.qtyItems}>-</TextSemiBold>
            </TouchableOpacity>
            <TextSemiBold style={giftStyle.qtyItems}>{qty}</TextSemiBold>
            <TouchableOpacity
              style={giftStyle.addQty}
              onPress={() => addQty(qty, gift?.price, setQty, setTotal)}>
              <TextSemiBold style={giftStyle.qtyItems}>+</TextSemiBold>
            </TouchableOpacity>
          </View>
        </View>
        {/* Payment */}
        <View style={giftStyle.payment}>
          <View style={giftStyle.total}>
            <TextRegular style={giftStyle.totalText}>Total:</TextRegular>
            <TextSemiBold style={giftStyle.totalValue}>${total}</TextSemiBold>
          </View>
          <TouchableOpacity
            style={giftStyle.checkoutBtn}
            onPress={() => {
              handleAddToCart();
              navigation.push('Cart', { userId: userId });
            }}>
            <TextRegular style={giftStyle.checkoutText}>Order</TextRegular>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Gift;
