import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextRegular, TextSemiBold } from '../CustomText';
import historyItem from './styles/historyItem';

const HistoryItem = () => {
  return (
    <View style={historyItem.card}>
      {/* Info */}
      <View style={historyItem.info}>
        <TextSemiBold style={historyItem.order}>Orden #E5DDC</TextSemiBold>
        <TextRegular style={historyItem.qty}>1 articulo</TextRegular>
        <View style={historyItem.datePrice}>
          <TextRegular style={historyItem.date}>28/02/2023 3:27 PM</TextRegular>
          <TextSemiBold style={historyItem.price}>$300</TextSemiBold>
        </View>
        {/* Line */}
        <View style={historyItem.line} />
        {/* Gift */}
        <View style={historyItem.gift}>
          <View style={historyItem.imgContainer}>
            <Image
              source={{ uri: 'https://i.imgur.com/9FhWSJl.jpg' }}
              style={historyItem.image}
            />
          </View>
          <TextSemiBold style={historyItem.name}>Gift Name</TextSemiBold>
        </View>
      </View>
      {/* Button */}
      <TouchableOpacity style={historyItem.btn}>
        <TextSemiBold style={historyItem.btnTxt}>Reordenar</TextSemiBold>
      </TouchableOpacity>
    </View>
  );
};

export default HistoryItem;
