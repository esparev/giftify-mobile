import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import GiftList from '../components/Lists/GiftList';
import getData from '../utils/functions/getData';
import icon from '../styles/icon';
import home from './styles/home';

const mapMarker = '../assets/icons/map-marker-area.png';
const cart = '../assets/icons/cart.png';
const profile = '../assets/static/default-gift.png';
const promotion = '../assets/static/promotion.png';

let userUsername: string;

(async () => {
  const userData = await getData();
  userUsername = userData.user.username;
})();

const useHome = (username: string) => {
  const query = gql`
    query GetHome($username: String!) {
      gifts {
        id
        name
        image
        rating
        price
      }
      user(username: $username) {
        avatar
      }
    }
  `;
  return useQuery(query, { variables: { username: username } });
};

const Home = (): JSX.Element => {
  const { loading, error, data } = useHome(userUsername);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const gifts = data?.gifts;
  const avatar = data?.user?.avatar;

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
            <Image source={loading ? require(profile) : { uri: avatar }} style={icon.profile} />
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
        <GiftList gifts={gifts} />
      )}
    </View>
  );
};

export default Home;
