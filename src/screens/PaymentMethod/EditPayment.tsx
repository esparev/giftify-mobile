import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMedium } from '../../components/CustomText';
import Header from '../../components/Header';
import editPayment from './styles/editPayment';
import form from '../../styles/form';

const EditPayment = () => {
  return (
    <View style={editPayment.main}>
      <Header title="Datos de tu tarjeta" isNestedScreen />
      {/* Form */}
      <View style={form.form}>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Alias de la tarjeta</TextMedium>
          <TextInput style={form.input} placeholder="BBVA" />
        </View>
        <TouchableOpacity style={form.button}>
          <TextMedium style={form.buttonTxt}>Actualizar</TextMedium>
        </TouchableOpacity>
        <TextMedium style={form.secondaryBtn}>Eliminar tarjeta</TextMedium>
      </View>
    </View>
  );
};

export default EditPayment;
