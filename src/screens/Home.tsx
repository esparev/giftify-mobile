import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import GiftList from '../components/Lists/GiftList';
import icon from '../styles/icon';
import home from './styles/home';
import gifts from '../mocks/gifts';

const mapMarker = '../assets/icons/map-marker-area.png';
const cart = '../assets/icons/cart.png';
const profile = '../assets/static/profile.png';
const promotion = '../assets/static/promotion.png';

const Home = (): JSX.Element => {
  return (
    <View style={home.main}>
      {/* Header */}
      <View style={home.header}>
        {/* Location */}
        <TouchableOpacity style={home.location}>
          <Image source={require(mapMarker)} style={icon.size} />
          <View>
            <TextRegular style={home.locationText}>
              Ubicación de entrega
            </TextRegular>
            <TextSemiBold style={home.locationCity}>Morelia</TextSemiBold>
          </View>
        </TouchableOpacity>
        {/* Cart & Profile */}
        <View style={home.cartProfile}>
          <TouchableOpacity>
            <Image source={require(cart)} style={icon.size} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require(profile)} style={icon.profile} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Promo */}
      <View style={home.promotion}>
        <Image source={require(promotion)} style={home.promotionImage} />
      </View>
      {/* Categories */}
      <View></View>
      {/* Gift Items */}
      <GiftList gifts={gifts} />
    </View>
  );
};

export default Home;
