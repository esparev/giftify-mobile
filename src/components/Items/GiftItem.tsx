import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GiftProps } from '../../@types/index';
import { TextRegular, TextSemiBold } from '../CustomText';
import giftItem from './styles/giftItem';

const defaultGift = '../../assets/static/default-gift.png';
const star = '../../assets/icons/favorite-star.png';

const GiftItem = (props: { gift: GiftProps }): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <TouchableOpacity
      style={giftItem.card}
      onPress={() => navigation.push('Gift', { id: props.gift.id })}>
      <Image
        defaultSource={{ uri: defaultGift }}
        source={{ uri: props.gift.image }}
        style={giftItem.image}
      />
      {/* Info */}
      <View style={giftItem.info}>
        <TextSemiBold style={giftItem.name}>{props.gift.name}</TextSemiBold>
        {/* Card Footer */}
        <View style={giftItem.footer}>
          {/* Rating */}
          <View style={giftItem.rating}>
            <Image source={require(star)} style={giftItem.ratingStar} />
            <TextRegular style={giftItem.ratingText}>
              {props.gift.rating}
            </TextRegular>
          </View>
          {/* Price */}
          <TextRegular style={giftItem.price}>${props.gift.price}</TextRegular>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GiftItem;
