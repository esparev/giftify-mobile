import React from 'react';
import { TouchableOpacity, View, Image, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useProfile from '../../graphql/useProfile';
import { updateUserMutation } from '../../graphql/userMutation'; // prettier-ignore
import { ProfileScreenProps } from '../../@types';
import { TextMedium, TextSemiBold } from '../../components/CustomText';
import Header from '../../components/Header';
import { initialValues, validationSchema } from '../../utils/functions/editUserUtils'; // prettier-ignore
import settings from './styles/settings';
import form from '../../styles/form';

const defaultProfile = '../../assets/static/default-gift.png';

const Settings = (props: ProfileScreenProps) => {
  const { route: { params: { username } } } = props; // prettier-ignore
  const { loading, error, data } = useProfile(username);
  const [updateUser] = useMutation(updateUserMutation);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const user = data?.user;

  const formik = useFormik({
    initialValues: initialValues(user),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: data => {
      updateUser({ variables: { username: user?.username, data: data } });
      navigation.goBack();
    },
  });

  return (
    <View style={settings.main}>
      <Header title="Configuración" isNestedScreen />
      {/* Profile */}
      <View style={settings.profile}>
        {/* Profile Image */}
        {user?.avatar ? (
          <Image
            source={loading ? require(defaultProfile) : { uri: user?.avatar }}
            style={settings.profileImg}
          />
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
          <TextMedium style={form.label}>Nombre(s)</TextMedium>
          <TextInput
            style={form.input}
            placeholder={user?.firstName}
            value={formik.values.firstName}
            onChangeText={input => formik.setFieldValue('firstName', input)}
          />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Apellidos</TextMedium>
          <TextInput
            style={form.input}
            placeholder={user?.lastName}
            value={formik.values.lastName}
            onChangeText={input => formik.setFieldValue('lastName', input)}
          />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Nombre de usuario</TextMedium>
          <TextInput
            style={form.input}
            placeholder={user?.username}
            value={formik.values.username}
            onChangeText={input => formik.setFieldValue('username', input)}
          />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Correo electrónico</TextMedium>
          <TextInput
            style={form.input}
            placeholder={user?.email}
            value={formik.values.email}
            onChangeText={input => formik.setFieldValue('email', input)}
          />
        </View>
        {/* <View style={form.inputField}>
          <TextMedium style={form.label}>Número de teléfono</TextMedium>
          <TextInput style={form.input} placeholder="4431683881" />
        </View> */}
        <TouchableOpacity style={form.button} onPress={formik.handleSubmit}>
          <TextMedium style={form.buttonTxt}>Actualizar perfil</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
