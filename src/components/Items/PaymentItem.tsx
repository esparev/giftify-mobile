import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { PaymentProps } from '../../@types/index';
import paymentItem from './styles/paymentItem';
import { TextRegular, TextMedium } from '../../components/CustomText';

const visa = '../../assets/icons/visa.png';
const mastercard = '../../assets/icons/mastercard.png';
const googlePay = '../../assets/icons/google-pay.png';

const PaymentItem = (props: { payment: PaymentProps }): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <TouchableOpacity
      style={paymentItem.method}
      onPress={() => navigation.push('Edit Payment')}>
      <View style={paymentItem.card}>
        <Image source={require(mastercard)} style={paymentItem.icon} />
        <TextMedium style={paymentItem.cardInfo}>
          •••• {props.payment.last4}{' '}
          {props.payment.alias ? `(${props.payment.alias})` : null}
        </TextMedium>
      </View>
      {/* <TextRegular style={paymentItem.status}>Principal</TextRegular> */}
    </TouchableOpacity>
  );
};

export default PaymentItem;
