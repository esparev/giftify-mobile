import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMedium } from '../../components/CustomText';
import Header from '../../components/Header';
import address from './styles/address';
import form from '../../styles/form';

const EditAddress = () => {
  return (
    <View style={address.main}>
      <Header title="Agregar dirección de envío" isNestedScreen />
      {/* Form */}
      <View style={form.form}>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Calle y número</TextMedium>
          <TextInput style={form.input} placeholder="Universo 82" />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Colonia</TextMedium>
          <TextInput style={form.input} placeholder="Hermenegildo Galeana" />
        </View>
        <View style={form.inputField}>
          <TextMedium style={form.label}>Código postal</TextMedium>
          <TextInput style={form.input} placeholder="58050" />
        </View>
        <View style={form.row}>
          <View style={form.halfInputField}>
            <TextMedium style={form.label}>Ciudad</TextMedium>
            <TextInput style={form.input} placeholder="Morelia" />
          </View>
          <View style={form.halfInputField}>
            <TextMedium style={form.label}>Estado</TextMedium>
            <TextInput style={form.input} placeholder="Michoacán" />
          </View>
        </View>

        <TouchableOpacity style={form.button}>
          <TextMedium style={form.buttonTxt}>Agregar dirección</TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditAddress;
