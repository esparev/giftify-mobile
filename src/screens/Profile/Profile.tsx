import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMedium, TextSemiBold } from '../../components/CustomText';
import Header from '../../components/Header';
import profile from './styles/profile';

const shopBagIcon = '../../assets/icons/shopping-bag-red.png';
const cardIcon = '../../assets/icons/creditcard-blue.png';
const navIcon = '../../assets/icons/navigation-green.png';
const bellIcon = '../../assets/icons/bell-yellow.png';

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={profile.main}>
      <Header title="Perfil" isNestedScreen />
      {/* Profile */}
      <TouchableOpacity
        style={profile.profile}
        onPress={() => navigation.push('Settings')}>
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
        <TouchableOpacity
          style={profile.item}
          onPress={() => navigation.push('Historial')}>
          <View style={profile.red}>
            <Image source={require(shopBagIcon)} style={profile.icon} />
          </View>
          <TextMedium style={profile.text}>Tus compras</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity
          style={profile.item}
          onPress={() => navigation.push('Payments')}>
          <View style={profile.blue}>
            <Image source={require(cardIcon)} style={profile.icon} />
          </View>
          <TextMedium style={profile.text}>Métodos de pago</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity
          style={profile.item}
          onPress={() => navigation.push('Addresses')}>
          <View style={profile.green}>
            <Image source={require(navIcon)} style={profile.icon} />
          </View>
          <TextMedium style={profile.text}>Direcciones de envío</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity
          style={profile.item}
          onPress={() => navigation.push('Notifications')}>
          <View style={profile.yellow}>
            <Image source={require(bellIcon)} style={profile.icon} />
          </View>
          <TextMedium style={profile.text}>Notificaciones</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
