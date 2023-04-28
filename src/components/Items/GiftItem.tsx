import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {TextRegular, TextSemiBold} from '../CustomText';
import giftItem from './styles/giftItem';

const defaultGift = '../../assets/static/default-gift.png';
const star = '../../assets/icons/favorite-star.png';

const GiftItem = (props: GiftProps) => {
  return (
    <TouchableOpacity style={giftItem.card}>
      <Image
        source={{uri: props.image}}
        defaultSource={require(defaultGift)}
        style={giftItem.image}
      />
      {/* Info */}
      <View style={giftItem.info}>
        <TextSemiBold style={giftItem.name}>{props.name}</TextSemiBold>
        {/* Card Footer */}
        <View style={giftItem.footer}>
          {/* Rating */}
          <View style={giftItem.rating}>
            <Image source={require(star)} style={giftItem.ratingStar} />
            <TextRegular style={giftItem.ratingText}>
              {props.rating}
            </TextRegular>
          </View>
          {/* Price */}
          <TextRegular style={giftItem.price}>${props.price}</TextRegular>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GiftItem;
