import React from 'react';
import { TouchableOpacity, ScrollView, View, Image, TextInput } from 'react-native';
import { TextRegular, TextMedium } from '../../components/CustomText';
import Header from '../../components/Header';
import addPayment from './styles/addPayment';
import form from '../../styles/form';

const AddPayment = () => {
  return (
    <ScrollView>
      <View style={addPayment.main}>
        <Header title="Agregar método de pago" isNestedScreen />

        {/* Card Image */}
        <View style={addPayment.card}>
          {/* Info */}
          <View style={addPayment.cardInfo}>
            <Image
              source={require('../../assets/icons/visa-network.png')}
              style={addPayment.cardNet}
            />
            <View style={addPayment.cardNum}>
              <TextRegular style={addPayment.cardTitle}>Número de tarjeta</TextRegular>
              <TextMedium style={addPayment.cardTxtMain}>•••• •••• •••• 8014</TextMedium>
            </View>
            <View style={addPayment.cardFooter}>
              <View style={addPayment.cardholder}>
                <TextRegular style={addPayment.cardTitle}>Titular de la tarjeta</TextRegular>
                <TextMedium style={addPayment.cardTxtMain}>Gwen D. Miller</TextMedium>
              </View>
              <View style={addPayment.cardExpiry}>
                <TextRegular style={addPayment.cardTitle}>Vence</TextRegular>
                <TextMedium style={addPayment.cardTxtMain}>03/30</TextMedium>
              </View>
            </View>
          </View>
          {/* Image */}
          <View style={addPayment.cardContainer}>
            <Image source={require('../../assets/static/card.png')} style={addPayment.cardImg} />
          </View>
        </View>

        <View style={form.form}>
          <View style={form.inputField}>
            <TextMedium style={form.label}>Alias de la tarjeta</TextMedium>
            <TextInput style={form.input} placeholder="BBVA" />
          </View>
          <View style={form.inputField}>
            <TextMedium style={form.label}>Titular de la tarjeta</TextMedium>
            <TextInput style={form.input} placeholder="Gwen D. Miller" />
          </View>
          <View style={form.inputField}>
            <TextMedium style={form.label}>Número de la tarjeta</TextMedium>
            <TextInput style={form.input} placeholder="4444 4444 4444 4444" />
          </View>
          <View style={form.row}>
            <View style={form.halfInputField}>
              <TextMedium style={form.label}>Fecha de expiración</TextMedium>
              <TextInput style={form.input} placeholder="03/30" />
            </View>
            <View style={form.halfInputField}>
              <TextMedium style={form.label}>CVV</TextMedium>
              <TextInput style={form.input} placeholder="123" />
            </View>
          </View>

          <TouchableOpacity style={form.button}>
            <TextMedium style={form.buttonTxt}>Agregar tarjeta</TextMedium>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddPayment;
