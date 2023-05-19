import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { AddressProps } from '../../@types/index';
import addressItem from './styles/addressItem';
import { TextRegular, TextMedium } from '../../components/CustomText';

const navIcon = '../../assets/icons/navigation.png';

const AddressItem = (props: { address: AddressProps }): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <TouchableOpacity
      style={addressItem.address}
      onPress={() =>
        navigation.push('Edit Address', { address: props.address })
      }>
      <View style={addressItem.item}>
        <Image source={require(navIcon)} style={addressItem.icon} />
        <View style={addressItem.info}>
          <TextMedium style={addressItem.stName}>
            {props.address.streetName} {props.address.streetNumber}
          </TextMedium>
          <TextRegular>
            {props.address.locality}, {props.address.postalCode}
          </TextRegular>
          <TextRegular>
            {props.address.city}, {props.address.area}
          </TextRegular>
        </View>
      </View>
      {/* <TextRegular style={addressItem.status}>Principal</TextRegular> */}
    </TouchableOpacity>
  );
};

export default AddressItem;
