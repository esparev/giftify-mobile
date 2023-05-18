import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { TextRegular, TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import HistoryItem from '../components/Items/HistoryItem';
import history from './styles/history';

const emptyHistory = '../assets/icons/receipt-text.png';

const History = () => {
  const isEmptyHistory = true;

  return (
    <View style={history.main}>
      <Header title="History" />
      {isEmptyHistory ? (
        <View style={history.emptyHistory}>
          <Image
            source={require(emptyHistory)}
            style={history.emptyHistoryImg}
          />
          <View style={history.emptyInfo}>
            <TextSemiBold style={history.emptyHistoryTitle}>
              Tu historial está vacío
            </TextSemiBold>
            <TextRegular style={history.emptyHistoryText}>
              Empieza a comprar para llenarlo
            </TextRegular>
          </View>
        </View>
      ) : (
        <>
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
        </>
      )}
    </View>
  );
};

export default History;
