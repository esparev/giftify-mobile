import React from 'react';
import { FlatList } from 'react-native';
import { PaymentListProps } from '../../@types/index';
import PaymentItem from '../Items/PaymentItem';

const PaymentList = (props: PaymentListProps): JSX.Element => {
  const { payments } = props;

  return (
    <FlatList
      data={payments}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={payment => String(payment.id)}
      renderItem={({ item }) => <PaymentItem payment={item} />}
    />
  );
};

export default PaymentList;
