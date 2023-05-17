import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextRegular, TextMedium } from '../../components/CustomText';
import Header from '../../components/Header';
import payments from './styles/payments';

const visa = '../../assets/icons/visa.png';
const mastercard = '../../assets/icons/mastercard.png';
const googlePay = '../../assets/icons/google-pay.png';

const Payments = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={payments.main}>
      <Header title="Métodos de pago" isNestedScreen />
      {/* Payment Methods */}
      <View style={payments.methods}>
        <TouchableOpacity
          style={payments.method}
          onPress={() => navigation.push('Edit Payment')}>
          <View style={payments.card}>
            <Image source={require(mastercard)} style={payments.icon} />
            <TextMedium style={payments.cardInfo}>•••• 4444</TextMedium>
          </View>
          <TextRegular style={payments.status}>Principal</TextRegular>
        </TouchableOpacity>
        <TouchableOpacity
          style={payments.method}
          onPress={() => navigation.push('Edit Payment')}>
          <View style={payments.card}>
            <Image source={require(visa)} style={payments.icon} />
            <TextMedium style={payments.cardInfo}>•••• 8888</TextMedium>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={payments.method}
          onPress={() => navigation.push('Edit Payment')}>
          <View style={payments.card}>
            <Image source={require(googlePay)} style={payments.icon} />
            <TextMedium style={payments.cardInfo}>Google Pay</TextMedium>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={payments.method}
          onPress={() => navigation.push('Add Payment')}>
          <TextMedium style={payments.addPayment}>
            Agregar método de pago
          </TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payments;
