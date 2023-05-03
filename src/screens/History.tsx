import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import HistoryItem from '../components/Items/HistoryItem';
import history from './styles/history';

const History = () => {
  return (
    <View>
      <Header title="History" />
    </View>
  );
};

export default History;
