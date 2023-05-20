import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import useProfile from '../graphql/useProfile';
import { getData } from '../storage';
import { TextMedium } from '../components/CustomText';
import icon from '../styles/icon';
import header from './styles/header';

type HeaderProps = {
  isNestedScreen?: boolean;
  title: string;
};

const cart = '../assets/icons/cart.png';
const arrow = '../assets/icons/arrow-left.png';

let userUsername: string;

(async () => {
  const userData = await getData();
  userUsername = userData.user.username;
})();

const Header = (props: HeaderProps): JSX.Element => {
  const { data } = useProfile(userUsername);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const routesLength = navigation.getState().routes.length;
  const lastRoute = navigation.getState().routes[routesLength - 1].name;

  const shouldGoToCart = (): void => {
    if (lastRoute !== 'Cart') {
      navigation.push('Cart', { userId: data?.user?.id });
    }
  };

  return (
    <View style={header.container}>
      {props.isNestedScreen && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require(arrow)} style={icon.size} />
        </TouchableOpacity>
      )}
      <TextMedium style={header.title}>{props.title}</TextMedium>
      <TouchableOpacity onPress={shouldGoToCart}>
        <Image source={require(cart)} style={icon.size} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
