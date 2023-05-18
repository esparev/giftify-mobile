import React from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { gql, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserIdProps } from '../../@types';
import { TextMedium } from '../../components/CustomText';
import Header from '../../components/Header';
import address from './styles/address';
import form from '../../styles/form';

const initialValues = () => {
  return {
    streetName: '',
    streetNumber: '',
    area: '',
    postalCode: '',
    city: '',
    locality: '',
    country: '',
    userId: '',
  };
};

const validationSchema = () => {
  return {
    streetName: Yup.string().required('Por favor ingrese la calle y número'),
    area: Yup.string().required('Por favor ingrese la colonia'),
    postalCode: Yup.string().required('Por favor ingrese el código postal'),
    city: Yup.string().required('Por favor ingrese la ciudad'),
    locality: Yup.string().required('Por favor ingrese el estado'),
    country: Yup.string().required('Por favor ingrese el país'),
  };
};

function extractStreetDetails(address: string) {
  const regex = /^(.*\b(?:\w+\W+)*\w+)\s+(\d+)\s*$/; // Matches the street name followed by the street number at the end
  const match = address.match(regex);
  if (match) {
    const streetName = match[1].trim(); // Extracts the street name and trims leading/trailing spaces
    const streetNumber = match[2]; // Extracts the street number
    return { streetName, streetNumber };
  } else {
    return null; // No street details found
  }
}

const addressMutation = gql`
  mutation CreateAddress($data: CreateAddress!) {
    createAddress(data: $data) {
      id
    }
  }
`;

const AddAddress = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const [createAddress, { data, loading, error }] =
    useMutation(addressMutation);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: data => {
      const streetDetails = extractStreetDetails(data.streetName);
      data.streetName = streetDetails!.streetName;
      data.streetNumber = streetDetails!.streetNumber;
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
