import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import HistoryItem from '../components/Items/HistoryItem';
import history from './styles/history';

const History = () => {
  return (
    <View style={history.main}>
      <Header title="History" />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </View>
  );
};

export default History;
