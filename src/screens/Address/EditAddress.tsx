import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextMedium } from '../../components/CustomText';
import DeleteAddress from '../../modals/DeleteModal';
import Header from '../../components/Header';
import address from './styles/address';
import form from '../../styles/form';

const EditAddress = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={address.main}>
        <Header title="Dirección de envío" isNestedScreen />
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
