import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { EditAddressScreenProps } from '../../@types';
import { updateAddressMutation } from '../../graphql/addressMutation';
import { TextMedium } from '../../components/CustomText';
import DeleteAddress from '../../modals/DeleteModal';
import Header from '../../components/Header';
import { extractStreetDetails } from '../../utils/functions/addAddressUtils'; // prettier-ignore
import { initialValues, validationSchema } from '../../utils/functions/editAddressUtils'; // prettier-ignore
import addressStyles from './styles/address';
import form from '../../styles/form';

const EditAddress = (props: EditAddressScreenProps) => {
  const { route: { params: { address } } } = props; // prettier-ignore
  const [modalVisible, setModalVisible] = useState(false);
  const [updateAddress, { data, loading, error }] = useMutation(updateAddressMutation); // prettier-ignore

  const formik = useFormik({
    initialValues: initialValues(address),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: data => {
      const streetDetails = extractStreetDetails(data.streetName);
      data.streetName = streetDetails!.streetName;
      data.streetNumber = streetDetails!.streetNumber;
      updateAddress({ variables: { id: address.id, data: data } });
    },
  });

  return (
    <View>
      <View style={addressStyles.main}>
        <Header title="Dirección de envío" isNestedScreen />
        {/* Form */}
        <View style={form.form}>
          <View style={form.inputField}>
            <TextMedium style={form.label}>Calle y número</TextMedium>
            <TextInput
              style={form.input}
              placeholder={`${address.streetName} ${address.streetNumber}`}
              value={formik.values.streetName}
              onChangeText={input => formik.setFieldValue('streetName', input)}
            />
          </View>
          <View style={form.inputField}>
            <TextMedium style={form.label}>Colonia</TextMedium>
            <TextInput
              style={form.input}
              placeholder={address.locality}
              value={formik.values.locality}
              onChangeText={input => formik.setFieldValue('locality', input)}
            />
          </View>
          <View style={form.inputField}>
            <TextMedium style={form.label}>Código postal</TextMedium>
            <TextInput
              style={form.input}
              placeholder={address.postalCode}
              value={formik.values.postalCode}
              onChangeText={input => formik.setFieldValue('postalCode', input)}
            />
          </View>
          <View style={form.row}>
            <View style={form.halfInputField}>
              <TextMedium style={form.label}>Ciudad</TextMedium>
              <TextInput
                style={form.input}
                placeholder={address.city}
                value={formik.values.city}
                onChangeText={input => formik.setFieldValue('city', input)}
              />
            </View>
            <View style={form.halfInputField}>
              <TextMedium style={form.label}>Estado</TextMedium>
              <TextInput
                style={form.input}
                placeholder={address.area}
                value={formik.values.area}
                onChangeText={input => formik.setFieldValue('area', input)}
              />
            </View>
          </View>
          <View style={form.inputField}>
            <TextMedium style={form.label}>País</TextMedium>
            <TextInput
              style={form.input}
              placeholder={address.country}
              value={formik.values.country}
              onChangeText={input => formik.setFieldValue('country', input)}
            />
          </View>

          <TouchableOpacity style={form.button} onPress={formik.handleSubmit}>
            <TextMedium style={form.buttonTxt}>Actualizar</TextMedium>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <TextMedium style={form.secondaryBtn}>
              Eliminar dirección
            </TextMedium>
          </TouchableOpacity>
        </View>
      </View>
      {/* Delete Address Modal */}
      <DeleteAddress
        title="¿Deseas eliminar la dirección?"
        description="Eliminar esta dirección no afectará su historial de compras. Esta acción no puede deshacerse."
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default EditAddress;
