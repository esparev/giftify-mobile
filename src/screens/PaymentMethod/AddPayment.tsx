import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, View, Image, TextInput } from 'react-native'; // prettier-ignore
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserIdProps } from '../../@types';
import { createPaymentMutation } from '../../graphql/paymentMutation';
import { TextRegular, TextMedium } from '../../components/CustomText';
import Header from '../../components/Header';
import { initialValues, validationSchema, parseDate, formatCardNumber } from '../../utils/functions/addPaymentUtils'; // prettier-ignore
import addPayment from './styles/addPayment';
import form from '../../styles/form';

const AddPayment = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const [expiryDate, setExpiryDate] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [createPayment, { data, loading, error }] =
    useMutation(createPaymentMutation);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: data => {
      const parsedDate = parseDate(expiryDate);
      data.number = cardNumber.replace(/\s/g, '');
      data.cardholderName = data.cardholderName.toUpperCase();
      data.expiryMonth = parsedDate.month;
      data.expiryYear = parsedDate.year;
      data.userId = userId;
      createPayment({ variables: { data: data } });
    },
  });

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
              <TextRegular style={addPayment.cardTitle}>
                Número de tarjeta
              </TextRegular>
              <TextMedium style={addPayment.cardTxtMain}>
                {cardNumber ? cardNumber : '•••• •••• •••• 8014'}
              </TextMedium>
            </View>
            <View style={addPayment.cardFooter}>
              <View style={addPayment.cardholder}>
                <TextRegular style={addPayment.cardTitle}>
                  Titular de la tarjeta
                </TextRegular>
                <TextMedium style={addPayment.cardTxtMain}>
                  {formik.values.cardholderName
                    ? formik.values.cardholderName.toUpperCase()
                    : 'Gwen D. Miller'}
                </TextMedium>
              </View>
              <View style={addPayment.cardExpiry}>
                <TextRegular style={addPayment.cardTitle}>Vence</TextRegular>
                <TextMedium style={addPayment.cardTxtMain}>
                  {expiryDate ? expiryDate : '03/30'}
                </TextMedium>
              </View>
            </View>
          </View>
          {/* Image */}
          <View style={addPayment.cardContainer}>
            <Image
              source={require('../../assets/static/card.png')}
              style={addPayment.cardImg}
            />
          </View>
        </View>

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
          <View style={form.inputField}>
            <TextMedium style={form.label}>Titular de la tarjeta</TextMedium>
            <TextInput
              style={form.input}
              placeholder="Gwen D. Miller"
              value={formik.values.cardholderName}
              onChangeText={input =>
                formik.setFieldValue('cardholderName', input)
              }
            />
          </View>
          <View style={form.inputField}>
            <TextMedium style={form.label}>Número de la tarjeta</TextMedium>
            <TextInput
              style={form.input}
              placeholder="4444 4444 4444 4444"
              value={cardNumber}
              maxLength={19}
              onChangeText={input => {
                formik.setFieldValue('number', input);
                setCardNumber(formatCardNumber(input));
              }}
            />
          </View>
          <View style={form.row}>
            <View style={form.halfInputField}>
              <TextMedium style={form.label}>Fecha de expiración</TextMedium>
              <TextInput
                style={form.input}
                placeholder="03/30"
                maxLength={5}
                value={expiryDate}
                onChangeText={input => {
                  formik.setFieldValue('expiryMonth', input);
                  setExpiryDate(input);
                }}
              />
            </View>
            <View style={form.halfInputField}>
              <TextMedium style={form.label}>CVV</TextMedium>
              <TextInput
                style={form.input}
                placeholder="123"
                maxLength={4}
                value={formik.values.cvv}
                onChangeText={input => formik.setFieldValue('cvv', input)}
              />
            </View>
          </View>

          <TouchableOpacity style={form.button} onPress={formik.handleSubmit}>
            <TextMedium style={form.buttonTxt}>Agregar tarjeta</TextMedium>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddPayment;
