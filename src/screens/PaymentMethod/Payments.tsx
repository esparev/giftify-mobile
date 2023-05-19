import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { UserIdProps } from '../../@types';
import {
  TextRegular,
  TextMedium,
  TextSemiBold,
} from '../../components/CustomText';
import Header from '../../components/Header';
import PaymentList from '../../components/Lists/PaymentList';
import payments from './styles/payments';

const visa = '../../assets/icons/visa.png';
const mastercard = '../../assets/icons/mastercard.png';
const googlePay = '../../assets/icons/google-pay.png';
const emptyPayment = '../../assets/icons/creditcard-stack.png';

const usePayments = (userId: string) => {
  const query = gql`
    query GetPayments($userId: UUID!) {
      paymentMethods(userId: $userId) {
        id
        alias
        last4
        network
      }
    }
  `;
  return useQuery(query, { variables: { userId: userId } });
};

const Payments = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const { loading, error, data } = usePayments(userId);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const isEmptyPayment = data?.paymentMethods.length === 0;

  return (
    <View style={payments.main}>
      <Header title="Métodos de pago" isNestedScreen />
      {isEmptyPayment ? (
        <View style={payments.emptyPayment}>
          <Image
            source={require(emptyPayment)}
            style={payments.emptyPaymentImg}
          />
          <View style={payments.emptyInfo}>
            <TextSemiBold style={payments.emptyPaymentTitle}>
              Sin métodos de pago
            </TextSemiBold>
            <TextRegular style={payments.emptyPaymentText}>
              Necesitas un método de pago para realizar compras
            </TextRegular>
            <TouchableOpacity
              style={payments.btn}
              onPress={() =>
                navigation.push('Add Payment', { userId: userId })
              }>
              <TextRegular style={payments.btnText}>
                Agregar método de pago
              </TextRegular>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <PaymentList payments={data?.paymentMethods} />
          <TouchableOpacity
            style={payments.method}
            onPress={() => navigation.push('Add Payment', { userId: userId })}>
            <TextMedium style={payments.addPayment}>
              Agregar método de pago
            </TextMedium>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Payments;
