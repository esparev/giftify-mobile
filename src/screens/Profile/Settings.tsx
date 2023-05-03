import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMedium, TextSemiBold } from '../../components/CustomText';
import Header from '../../components/Header';
import settings from './styles/settings';
import form from '../../styles/form';

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
      <View style={form.form}>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Nombre</TextMedium>
          <TextInput style={form.input} placeholder="Gwen D. Miller" />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Nombre de usuario</TextMedium>
          <TextInput style={form.input} placeholder="gwen.d.miller" />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Correo electrónico</TextMedium>
          <TextInput
            style={form.input}
            placeholder="gwen.miller@giftify.com"
          />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Número de teléfono</TextMedium>
          <TextInput style={form.input} placeholder="4431683881" />
        </View>
        <TouchableOpacity style={form.button}>
          <TextMedium style={form.buttonTxt}>Actualizar perfil</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
