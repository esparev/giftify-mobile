import React, { useState } from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  TextInput,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { gql, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserIdProps } from '../../@types';
import { TextRegular, TextMedium } from '../../components/CustomText';
import Header from '../../components/Header';
import addPayment from './styles/addPayment';
import form from '../../styles/form';

const initialValues = () => {
  return {
    alias: '',
    cardholderName: '',
    number: '',
    expiryMonth: 0,
    expiryYear: 0,
    cvv: '',
    userId: '',
  };
};

const validationSchema = () => {
  return {
    alias: Yup.string().required('Por favor ingrese el alias de la tarjeta'),
    cardholderName: Yup.string().required(
      'Por favor ingrese el titular de la tarjeta',
    ),
    number: Yup.string().required('Por favor ingrese el número de la tarjeta'),
    // expiryMonth: Yup.number(),
    cvv: Yup.string().required('Por favor ingrese el CVV'),
  };
};

const parseDate = (dateString: string) => {
  const [monthString, yearString] = dateString.split('/');
  const month = parseInt(monthString, 10);
  const year = parseInt(yearString, 10);

  return { month, year };
};

const formatCardNumber = (input: string) => {
  const cardNumber = input.replace(/\D/g, ''); // Remove non-numeric characters
  const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 '); // Add a space after every 4 digits

  return formattedCardNumber;
};

const paymentMutation = gql`
  mutation CreatePayment($data: CreatePaymentMethod!) {
    createPaymentMethod(data: $data) {
      id
    }
  }
`;

const AddPayment = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const [expiryDate, setExpiryDate] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [createPayment, { data, loading, error }] =
    useMutation(paymentMutation);

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
      console.log(data);

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
