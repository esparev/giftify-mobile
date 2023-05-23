import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { UserProps } from '../@types';
import getHome from '../api/getHome';
import { getData } from '../storage';
import HomeSkeleton from '../skeletons/HomeSkeleton';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import GiftList from '../components/Lists/GiftList';
import icon from '../styles/icon';
import home from './styles/home';

const mapMarker = '../assets/icons/map-marker-area.png';
const cart = '../assets/icons/cart.png';
const profile = '../assets/static/default-gift.png';
const promotion = '../assets/static/promotion.png';

const Home = (): JSX.Element => {
  const isFocused = useIsFocused();
  const [user, setUser] = useState<UserProps>({
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    avatar: '',
  });
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const loadData = async () => {
    try {
      let userUsername: string;
      let token: string;

      const userData = await getData();
      userUsername = userData.user.username;
      token = userData.token;

      const { user, gifts } = await getHome(userUsername, token);
      setUser(user);
      setGifts(gifts);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      await loadData();
    })();
  }, [isFocused]);

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
          <TouchableOpacity
            onPress={() => navigation.push('Cart', { userId: user.id })}>
            <Image source={require(cart)} style={icon.size} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.push('Profile', { username: user.username })
            }>
            <Image
              source={loading ? require(profile) : { uri: user.avatar }}
              style={icon.profile}
            />
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
      {loading ? <HomeSkeleton /> : <GiftList gifts={gifts} />}
    </View>
  );
};

export default Home;
