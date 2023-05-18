import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import GiftList from '../components/Lists/GiftList';
import icon from '../styles/icon';
import home from './styles/home';

const mapMarker = '../assets/icons/map-marker-area.png';
const cart = '../assets/icons/cart.png';
const profile = '../assets/static/profile.png';
const promotion = '../assets/static/promotion.png';

const useHome = () => {
  const query = gql`
    query GetHome {
      gifts {
        id
        name
        image
        rating
        price
      }
    }
  `;
  return useQuery(query);
};

const Home = (): JSX.Element => {
  const { loading, error, data } = useHome();
  const navigation = useNavigation<StackNavigationProp<any>>();
  
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
          <TouchableOpacity onPress={() => navigation.push('Cart')}>
            <Image source={require(cart)} style={icon.size} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Profile')}>
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
      {loading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <GiftList gifts={data?.gifts} />
      )}
    </View>
  );
};

export default Home;
