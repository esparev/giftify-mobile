import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProfileScreenProps } from '../../@types';
import { TextMedium, TextSemiBold } from '../../components/CustomText';
import Header from '../../components/Header';
import profile from './styles/profile';

const shopBagIcon = '../../assets/icons/shopping-bag-red.png';
const cardIcon = '../../assets/icons/creditcard-blue.png';
const navIcon = '../../assets/icons/navigation-green.png';
const bellIcon = '../../assets/icons/bell-yellow.png';
const logoutIcon = '../../assets/icons/logout-purple.png';
const defaultProfile = '../../assets/static/default-gift.png';

const useProfile = (username: string) => {
  const query = gql`
    query GetProfile($username: String!) {
      user(username: $username) {
        id
        username
        firstName
        lastName
        avatar
      }
    }
  `;
  return useQuery(query, { variables: { username: username } });
};

const removeData = async () => {
  try {
    await AsyncStorage.removeItem('@user_data');
  } catch (e) {
    return;
  }
};

const Profile = (props: ProfileScreenProps) => {
  const {
    route: {
      params: { username },
    },
  } = props;
  const { loading, error, data } = useProfile(username);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const user = data?.user;

  return (
    <View style={profile.main}>
      <Header title="Perfil" isNestedScreen />
      {/* Profile */}
      <TouchableOpacity
        style={profile.profile}
        onPress={() => navigation.push('Settings', { username: username })}>
        {/* Profile Image */}
        {user?.avatar ? (
          <Image
            source={loading ? require(defaultProfile) : { uri: user?.avatar }}
            style={profile.profileImg}
          />
        ) : (
          <View style={profile.profileContainer}>
            <TextSemiBold style={profile.profileTxt}>
              {user?.firstName[0]}
              {user?.lastName[0]}
            </TextSemiBold>
          </View>
        )}
        {/* Profile Info */}
        <View style={profile.info}>
          <TextSemiBold style={profile.name}>
            {user?.firstName} {user?.lastName}
          </TextSemiBold>
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
          onPress={() => navigation.push('Payments', { userId: user?.id })}>
          <View style={profile.blue}>
            <Image source={require(cardIcon)} style={profile.icon} />
          </View>
          <TextMedium style={profile.text}>Métodos de pago</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity
          style={profile.item}
          onPress={() => navigation.push('Addresses', { userId: user?.id })}>
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
        <TouchableOpacity
          style={profile.item}
          onPress={() => {
            removeData();
            navigation.push('Login');
          }}>
          <View style={profile.purple}>
            <Image source={require(logoutIcon)} style={profile.icon} />
          </View>
          <TextMedium style={profile.text}>Cerrar sesión</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
