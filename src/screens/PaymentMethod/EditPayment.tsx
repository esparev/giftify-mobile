import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { EditPaymentScreenProps } from '../../@types';
import { updatePaymentMutation, deletePaymentMutation } from '../../graphql/paymentMutation'; // prettier-ignore
import { TextMedium } from '../../components/CustomText';
import DeletePayment from '../../modals/DeleteModal';
import Header from '../../components/Header';
import { initialValues, validationSchema } from '../../utils/functions/editPaymentUtils'; // prettier-ignore
import editPayment from './styles/editPayment';
import form from '../../styles/form';

const EditPayment = (props: EditPaymentScreenProps) => {
  const { route: { params: { payment } } } = props; // prettier-ignore
  const [modalVisible, setModalVisible] = useState(false);
  const [updatePayment, { data, loading, error }] = useMutation(updatePaymentMutation); // prettier-ignore
  const [deletePayment] = useMutation(deletePaymentMutation);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const formik = useFormik({
    initialValues: initialValues(payment),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: data => {
      updatePayment({ variables: { id: payment.id, data: data } });
      navigation.goBack();
    },
  });

  const handleDelete = () => {
    deletePayment({ variables: { id: payment.id } });
    navigation.goBack();
  };

  return (
    <View style={editPayment.main}>
      <Header title="Datos de tu tarjeta" isNestedScreen />
      {/* Form */}
      <View style={form.form}>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Alias de la tarjeta</TextMedium>
          <TextInput
            style={form.input}
            placeholder="BBVA"
            value={formik.values.alias}
            onChangeText={input => formik.setFieldValue('alias', input)}
          />
        </View>
        <TouchableOpacity style={form.button} onPress={formik.handleSubmit}>
          <TextMedium style={form.buttonTxt}>Actualizar</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <TextMedium style={form.secondaryBtn}>Eliminar tarjeta</TextMedium>
        </TouchableOpacity>
      </View>
      {/* Delete Payment Modal */}
      <DeletePayment
        title="¿Deseas eliminar la tarjeta?"
        description="Eliminar esta tarjeta no afectará su historial de compras. Esta acción no puede deshacerse."
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onPress={handleDelete}
      />
    </View>
  );
};

export default EditPayment;
