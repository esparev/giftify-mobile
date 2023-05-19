import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image, TextInput, ActivityIndicator } from 'react-native'; // prettier-ignore
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { storeData } from '../storage';
import useAuth from '../hooks/useAuth';
import { TextMedium } from '../components/CustomText';
import form from '../styles/form';
import loginStyles from './styles/login';

const Logo = '../assets/static/logomark.png';

type FormValues = {
  email: string;
  password: string;
};

const initialValues = () => {
  return { email: '', password: '' };
};

const validationSchema = () => {
  return {
    email: Yup.string()
      .email('Ingrese un correo válido')
      .required('Por favor ingrese su correo'),
    password: Yup.string().required('Por favor ingrese su contraseña'),
  };
};

const Login = () => {
  const [error, setError] = useState(false);
  const [logging, setLogging] = useState(false);
  const { login } = useAuth();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const loginUser = async (url: string, data: FormValues) => {
    await axios
      .post(url, data)
      .then(res => {
        const user = res.data;
        login(user);
        storeData(user);
        setLogging(false);
        navigation.navigate('Home');
      })
      .catch(err => {
        setError(true);
        setLogging(false);
      });
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: data => {
      setLogging(true);
      const url = 'https://giftify-api.up.railway.app/api/v1/auth/login';
      loginUser(url, data);
    },
  });

  return (
    <View style={loginStyles.main}>
      {/* Logo */}
      <Image source={require(Logo)} style={loginStyles.logo} />
      {/* Form */}
      <View style={form.form}>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Correo electrónico</TextMedium>
          <TextInput
            style={form.input}
            autoCapitalize="none"
            placeholder="tucorreo@giftify.com"
            value={formik.values.email}
            onChangeText={input => formik.setFieldValue('email', input)}
          />
          <TextMedium style={loginStyles.formErr}>
            {formik.errors.email}
          </TextMedium>
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Contraseña</TextMedium>
          <TextInput
            style={form.input}
            placeholder="•••••••••••"
            autoCapitalize="none"
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={input => formik.setFieldValue('password', input)}
          />
          <TextMedium style={loginStyles.formErr}>
            {formik.errors.password}
          </TextMedium>
        </View>
        {error ? (
          <TextMedium style={loginStyles.formErr}>
            El correo o la contraseña son incorrectos
          </TextMedium>
        ) : null}
      </View>
      {/* Buttons */}
      <View style={loginStyles.buttons}>
        <TouchableOpacity
          style={loginStyles.secondaryBtn}
          onPress={() => navigation.push('SignUp')}>
          <TextMedium style={loginStyles.secondaryTxt}>Crear cuenta</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity
          style={loginStyles.mainBtn}
          onPress={formik.handleSubmit}>
          {logging ? (
            <View style={loginStyles.processBtn}>
              <ActivityIndicator color="#ffffff" />
              <TextMedium style={loginStyles.mainTxt}>Procesando...</TextMedium>
            </View>
          ) : (
            <TextMedium style={loginStyles.mainTxt}>Iniciar sesión</TextMedium>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
