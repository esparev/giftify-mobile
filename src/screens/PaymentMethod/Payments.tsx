import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { UserIdProps } from '../../@types';
import getPayments from '../../api/getPayments';
import { getData } from '../../storage';
import { TextRegular, TextMedium, TextSemiBold } from '../../components/CustomText'; // prettier-ignore
import Header from '../../components/Header';
import PaymentList from '../../components/Lists/PaymentList';
import paymentsStyle from './styles/payments';

const emptyPayment = '../../assets/icons/creditcard-stack.png';

const Payments = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);
  const [payments, setPayments] = useState();
  const [isEmptyPayment, setIsEmptyPayment] = useState(false);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const loadData = async () => {
    try {
      const { token } = await getData();
      const payments = await getPayments(userId, token);
      setPayments(payments);
      setIsEmptyPayment(payments.length === 0);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    (async () => {
      await loadData();
    })();
  }, [isFocused]);

  return (
    <View style={paymentsStyle.main}>
      <Header title="Métodos de pago" isNestedScreen />
      {isEmptyPayment ? (
        <View style={paymentsStyle.emptyPayment}>
          <Image
            source={require(emptyPayment)}
            style={paymentsStyle.emptyPaymentImg}
          />
          <View style={paymentsStyle.emptyInfo}>
            <TextSemiBold style={paymentsStyle.emptyPaymentTitle}>
              Sin métodos de pago
            </TextSemiBold>
            <TextRegular style={paymentsStyle.emptyPaymentText}>
              Necesitas un método de pago para realizar compras
            </TextRegular>
            <TouchableOpacity
              style={paymentsStyle.btn}
              onPress={() =>
                navigation.push('Add Payment', { userId: userId })
              }>
              <TextRegular style={paymentsStyle.btnText}>
                Agregar método de pago
              </TextRegular>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <PaymentList payments={payments} />
          <TouchableOpacity
            style={paymentsStyle.method}
            onPress={() => navigation.push('Add Payment', { userId: userId })}>
            <TextMedium style={paymentsStyle.addPayment}>
              Agregar método de pago
            </TextMedium>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Payments;
