import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserIdProps } from '../../@types';
import { createAddressMutation } from '../../graphql/addressMutation';
import { TextMedium } from '../../components/CustomText';
import Header from '../../components/Header';
import { initialValues, validationSchema, extractStreetDetails } from '../../utils/functions/addAddressUtils'; // prettier-ignore
import address from './styles/address';
import form from '../../styles/form';

const AddAddress = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const [streetDetails, setStreetDetails] = useState<string>('');
  const [createAddress, { data, loading, error }] = useMutation(createAddressMutation); // prettier-ignore

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: data => {
      setStreetDetails(data.streetName);
      const { streetName, streetNumber } = extractStreetDetails(streetDetails);
      data.streetName = streetName;
      data.streetNumber = streetNumber;
      data.userId = userId;
      createAddress({ variables: { data: data } });
    },
  });

  return (
    <View style={address.main}>
      <Header title="Agregar dirección de envío" isNestedScreen />
      {/* Form */}
      <View style={form.form}>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Calle y número</TextMedium>
          <TextInput
            style={form.input}
            placeholder="Universo 82"
            value={formik.values.streetName}
            onChangeText={input => formik.setFieldValue('streetName', input)}
          />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Colonia</TextMedium>
          <TextInput
            style={form.input}
            placeholder="Hermenegildo Galeana"
            value={formik.values.locality}
            onChangeText={input => formik.setFieldValue('locality', input)}
          />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Código postal</TextMedium>
          <TextInput
            style={form.input}
            placeholder="58050"
            value={formik.values.postalCode}
            onChangeText={input => formik.setFieldValue('postalCode', input)}
          />
        </View>
        <View style={form.row}>
          <View style={form.halfInputField}>
            <TextMedium style={form.label}>Ciudad</TextMedium>
            <TextInput
              style={form.input}
              placeholder="Morelia"
              value={formik.values.city}
              onChangeText={input => formik.setFieldValue('city', input)}
            />
          </View>
          <View style={form.halfInputField}>
            <TextMedium style={form.label}>Estado</TextMedium>
            <TextInput
              style={form.input}
              placeholder="Michoacán"
              value={formik.values.area}
              onChangeText={input => formik.setFieldValue('area', input)}
            />
          </View>
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>País</TextMedium>
          <TextInput
            style={form.input}
            placeholder="México"
            value={formik.values.country}
            onChangeText={input => formik.setFieldValue('country', input)}
          />
        </View>

        <TouchableOpacity style={form.button} onPress={formik.handleSubmit}>
          <TextMedium style={form.buttonTxt}>Agregar dirección</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddAddress;
