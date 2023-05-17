import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMedium, TextSemiBold } from '../components/CustomText';
import form from '../styles/form';
import signUp from './styles/signUp';

const Logo = '../assets/static/logomark.png';

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={signUp.main}>
      {/* Title */}
      <TextSemiBold style={signUp.title}>Crear una Nueva Cuenta</TextSemiBold>
      {/* Form */}
      <View style={form.form}>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Nombre completo</TextMedium>
          <TextInput style={form.input} placeholder="tucorreo@giftify.com" />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Correo electrónico</TextMedium>
          <TextInput style={form.input} placeholder="tucorreo@giftify.com" />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Contraseña</TextMedium>
          <TextInput style={form.input} placeholder="•••••••••••" secureTextEntry={true} />
        </View>
      </View>
      {/* Buttons */}
      <View style={signUp.buttons}>
        <TouchableOpacity
          style={signUp.secondaryBtn}
          onPress={() => navigation.push('Login')}>
          <TextMedium style={signUp.secondaryTxt}>Iniciar sesión</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity
          style={signUp.mainBtn}
          onPress={() => navigation.push('Home')}>
          <TextMedium style={signUp.mainTxt}>Crear cuenta</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
