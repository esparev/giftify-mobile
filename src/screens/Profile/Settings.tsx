import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMedium, TextSemiBold } from '../../components/CustomText';
import Header from '../../components/Header';
import settings from './styles/settings';

const Settings = () => {
  return (
    <View style={settings.main}>
      <Header title="Configuración" isNestedScreen />
      {/* Profile */}
      <View style={settings.profile}>
        {/* Profile Image */}
        <View style={settings.profileImg}>
          <TextSemiBold>GM</TextSemiBold>
        </View>
        {/* Profile Info */}
        <View style={settings.info}>
          <TextSemiBold style={settings.name}>Gwen D. Miler</TextSemiBold>
          <TextMedium style={settings.username}>@gwen.d.miller</TextMedium>
        </View>
      </View>
      {/* Form */}
      <View style={settings.form}>
        <View style={settings.inputField}>
          <TextMedium style={settings.label}>Nombre</TextMedium>
          <TextInput style={settings.input} placeholder="Gwen D. Miller" />
        </View>
        <View style={settings.inputField}>
          <TextMedium style={settings.label}>Nombre de usuario</TextMedium>
          <TextInput style={settings.input} placeholder="gwen.d.miller" />
        </View>
        <View style={settings.inputField}>
          <TextMedium style={settings.label}>Correo electrónico</TextMedium>
          <TextInput
            style={settings.input}
            placeholder="gwen.miller@giftify.com"
          />
        </View>
        <View style={settings.inputField}>
          <TextMedium style={settings.label}>Número de teléfono</TextMedium>
          <TextInput style={settings.input} placeholder="4431683881" />
        </View>
        <TouchableOpacity style={settings.updateBtn}>
          <TextMedium style={settings.updateTxt}>Actualizar perfil</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
