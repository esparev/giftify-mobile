import React from 'react';
import {TouchableOpacity, SafeAreaView , View, Image} from 'react-native';
import {TextRegular, TextSemiBold} from '../components/CustomText';
import GiftItem from '../components/Items/GiftItem';
import icon from '../styles/icon';
import home from './styles/home';

const mapMarker = '../assets/icons/map-marker-area.png';
const cart = '../assets/icons/cart.png';
const profile = '../assets/static/profile.png';
const promotion = '../assets/static/promotion.png';
const candles = 'https://i.imgur.com/O9Kqb2k.png';

const Home = (): JSX.Element => {
  return (
    <SafeAreaView  style={home.main}>
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
      <View style={{width: '100%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', rowGap: 24}}>
        <GiftItem name="Juego de velas perfumadas" price={300} rating={5} image={candles} />
        <GiftItem name="Juego de velas perfumadas" price={300} rating={5} image={candles} />
        <GiftItem name="Juego de velas perfumadas" price={300} rating={5} image={candles} />
        <GiftItem name="Juego de velas perfumadas" price={300} rating={5} image={candles} />
        <GiftItem name="Juego de velas perfumadas" price={300} rating={5} image={candles} />
        <GiftItem name="Juego de velas perfumadas" price={300} rating={5} image={candles} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
