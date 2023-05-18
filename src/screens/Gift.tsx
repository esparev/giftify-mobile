import React, { useState } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import { handleType, addQty, removeQty } from '../utils/functions/qtyModifier';
import gift from './styles/gift';

type RootStackParamList = {
  Gift: { id: string };
};

type GiftRouteProp = RouteProp<RootStackParamList, 'Gift'>;

interface GiftProps {
  route: GiftRouteProp;
}

const defaultGift = '../assets/static/default-gift.png';
const star = '../assets/icons/favorite-star.png';

const useGift = (id: string) => {
  const query = gql`
    query GetGift($id: UUID!) {
      gift(id: $id) {
        name
        image
        rating
        price
        description
      }
    }
  `;
  return useQuery(query, { variables: { id: id } });
};

const Gift = (props: GiftProps) => {
  const { route: { params: { id } } } = props;

  const { loading, error, data } = useGift(id);
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(data?.gift.price);
  const [activeBtn, setActiveBtn] = useState(true);

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
            source={{ uri: data?.gift?.image }}
            defaultSource={require(defaultGift)}
            style={gift.image}
          />
          {/* Info */}
          <View style={gift.info}>
            <TextSemiBold style={gift.name}>{data?.gift?.name}</TextSemiBold>
            {/* Meta */}
            <View style={gift.meta}>
              <Image source={require(star)} style={gift.ratingStar} />
              <TextRegular style={gift.metaText}>
                {data?.gift?.rating} | Buen empaque
              </TextRegular>
            </View>
          </View>
          {/* Description */}
          <TextRegular style={gift.description}>
            {data?.gift?.description}
          </TextRegular>
        </View>
        {/* Type */}
        <View style={gift.type}>
          <TextRegular style={gift.typeText}>Tipo</TextRegular>
          {/* Buttons */}
          <View style={gift.buttons}>
            <TouchableOpacity
              style={[gift.btn, activeBtn ? gift.btnActive : gift.btnInactive]}
              onPress={() => handleType('delivery', setActiveBtn)}>
              <TextRegular
                style={[
                  gift.btnText,
                  activeBtn ? gift.btnTextActive : gift.btnTextInactive,
                ]}>
                Entrega
              </TextRegular>
            </TouchableOpacity>
            <TouchableOpacity
              style={[gift.btn, activeBtn ? gift.btnInactive : gift.btnActive]}
              onPress={() => handleType('pickup', setActiveBtn)}>
              <TextRegular
                style={[
                  gift.btnText,
                  activeBtn ? gift.btnTextInactive : gift.btnTextActive,
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
        <View style={gift.qty}>
          <TextRegular style={gift.qtyText}>Cantidad</TextRegular>
          {/* Buttons */}
          <View style={gift.qtyModifier}>
            <TouchableOpacity
              style={gift.removeQty}
              onPress={() => removeQty(qty, data?.gift?.price, setQty, setTotal)}>
              <TextSemiBold style={gift.qtyItems}>-</TextSemiBold>
            </TouchableOpacity>
            <TextSemiBold style={gift.qtyItems}>{qty}</TextSemiBold>
            <TouchableOpacity
              style={gift.addQty}
              onPress={() => addQty(qty, data?.gift?.price, setQty, setTotal)}>
              <TextSemiBold style={gift.qtyItems}>+</TextSemiBold>
            </TouchableOpacity>
          </View>
        </View>
        {/* Payment */}
        <View style={gift.payment}>
          <View style={gift.total}>
            <TextRegular style={gift.totalText}>Total:</TextRegular>
            <TextSemiBold style={gift.totalValue}>${total}</TextSemiBold>
          </View>
          <TouchableOpacity style={gift.checkoutBtn}>
            <TextRegular style={gift.checkoutText}>Order</TextRegular>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Gift;
