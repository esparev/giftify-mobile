import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMedium } from '../components/CustomText';
import form from '../styles/form';
import login from './styles/login';

const Logo = '../assets/static/logomark.png';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={login.main}>
      {/* Logo */}
      <Image source={require(Logo)} style={login.logo} />
      {/* Form */}
      <View style={form.form}>
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
      <View style={login.buttons}>
        <TouchableOpacity
          style={login.secondaryBtn}
          onPress={() => navigation.push('SignUp')}>
          <TextMedium style={login.secondaryTxt}>Crear cuenta</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity
          style={login.mainBtn}
          onPress={() => navigation.push('Home')}>
          <TextMedium style={login.mainTxt}>Iniciar sesión</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
