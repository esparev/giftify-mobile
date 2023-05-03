import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMedium, TextSemiBold } from '../../components/CustomText';
import Header from '../../components/Header';
import profile from './styles/profile';

const shoppingBag = '../../assets/icons/shopping-bag-red.png';
const card = '../../assets/icons/creditcard-blue.png';
const navigation = '../../assets/icons/navigation-green.png';
const bell = '../../assets/icons/bell-yellow.png';

const Profile = () => {
  return (
    <View style={profile.main}>
      <Header title="Perfil" isNestedScreen />
      {/* Profile */}
      <TouchableOpacity style={profile.profile}>
        {/* Profile Image */}
        <View style={profile.profileImg}>
          <TextSemiBold>GM</TextSemiBold>
        </View>
        {/* Profile Info */}
        <View style={profile.info}>
          <TextSemiBold style={profile.name}>Gwen D. Miler</TextSemiBold>
          <TextMedium style={profile.seeProfile}>Ver perfil</TextMedium>
        </View>
      </TouchableOpacity>
      {/* Settings */}
      <View style={profile.settings}>
        <TouchableOpacity style={profile.item}>
          <View style={profile.red}>
            <Image source={require(shoppingBag)} style={profile.icon} />
          </View>
          <TextMedium style={profile.text}>Tus compras</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity style={profile.item}>
          <View style={profile.blue}>
            <Image source={require(card)} style={profile.icon} />
          </View>
          <TextMedium style={profile.text}>Métodos de pago</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity style={profile.item}>
          <View style={profile.green}>
            <Image source={require(navigation)} style={profile.icon} />
          </View>
          <TextMedium style={profile.text}>Direcciones de envío</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity style={profile.item}>
          <View style={profile.yellow}>
            <Image source={require(bell)} style={profile.icon} />
          </View>
          <TextMedium style={profile.text}>Notificaciones</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
