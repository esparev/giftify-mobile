import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMedium } from '../components/CustomText';
import icon from '../styles/icon';
import header from './styles/header';

type HeaderProps = {
  isNestedScreen?: boolean;
  title: string;
};

const cart = '../assets/icons/cart.png';
const arrow = '../assets/icons/arrow-left.png';

const Header = (props: HeaderProps): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={header.container}>
      {props.isNestedScreen && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require(arrow)} style={icon.size} />
        </TouchableOpacity>
      )}
      <TextMedium style={header.title}>{props.title}</TextMedium>
      <TouchableOpacity>
        <Image source={require(cart)} style={icon.size} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
