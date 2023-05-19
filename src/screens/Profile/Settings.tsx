import React from 'react';
import { TouchableOpacity, View, Image, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import useProfile from '../../graphql/useProfile';
import { ProfileScreenProps } from '../../@types';
import { TextMedium, TextSemiBold } from '../../components/CustomText';
import Header from '../../components/Header';
import settings from './styles/settings';
import form from '../../styles/form';

const defaultProfile = '../../assets/static/default-gift.png';

const Settings = (props: ProfileScreenProps) => {
  const { route: { params: { username } } } = props;
  const { loading, error, data } = useProfile(username);
  const user = data?.user;

  return (
    <View style={settings.main}>
      <Header title="Configuración" isNestedScreen />
      {/* Profile */}
      <View style={settings.profile}>
        {/* Profile Image */}
        {user?.avatar ? (
          <Image source={loading ? require(defaultProfile) : { uri: user?.avatar }} style={settings.profileImg} />
        ) : (
          <View style={settings.profileContainer}>
            <TextSemiBold style={settings.profileTxt}>
              {user?.firstName[0]}
              {user?.lastName[0]}
            </TextSemiBold>
          </View>
        )}
        {/* Profile Info */}
        <View style={settings.info}>
          <TextSemiBold style={settings.name}>
            {user?.firstName} {user?.lastName}
          </TextSemiBold>
          <TextMedium style={settings.username}>@{user?.username}</TextMedium>
        </View>
      </View>
      {/* Form */}
      <View style={form.form}>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Nombre</TextMedium>
          <TextInput
            style={form.input}
            placeholder={`${user?.firstName} ${user?.lastName}`}
          />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Nombre de usuario</TextMedium>
          <TextInput style={form.input} placeholder={user?.username} />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Correo electrónico</TextMedium>
          <TextInput style={form.input} placeholder={user?.email} />
        </View>
        {/* <View style={form.inputField}>
          <TextMedium style={form.label}>Número de teléfono</TextMedium>
          <TextInput style={form.input} placeholder="4431683881" />
        </View> */}
        <TouchableOpacity style={form.button}>
          <TextMedium style={form.buttonTxt}>Actualizar perfil</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
