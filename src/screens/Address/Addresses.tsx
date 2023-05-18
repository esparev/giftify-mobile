import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  TextRegular,
  TextMedium,
  TextSemiBold,
} from '../../components/CustomText';
import Header from '../../components/Header';
import addresses from './styles/addresses';

const navIcon = '../../assets/icons/navigation.png';
const emptyAddress = '../../assets/icons/home-detail.png';

const Addresses = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const isEmptyAddress = true;

  return (
    <View style={addresses.main}>
      <Header title="Direcciones de envío" isNestedScreen />
      {isEmptyAddress ? (
        <View style={addresses.emptyAddress}>
          <Image
            source={require(emptyAddress)}
            style={addresses.emptyAddressImg}
          />
          <View style={addresses.emptyInfo}>
            <TextSemiBold style={addresses.emptyAddressTitle}>
              Sin direcciones de envío
            </TextSemiBold>
            <TextRegular style={addresses.emptyAddressText}>
              Necesitas una dirección de envío para realizar compras
            </TextRegular>
            <TouchableOpacity
              style={addresses.btn}
              onPress={() => navigation.push('Add Address')}>
              <TextRegular style={addresses.btnText}>
                Agregar dirección de envío
              </TextRegular>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={addresses.addresses}>
          <TouchableOpacity
            style={addresses.address}
            onPress={() => navigation.push('Edit Address')}>
            <View style={addresses.item}>
              <Image source={require(navIcon)} style={addresses.icon} />
              <View style={addresses.info}>
                <TextMedium style={addresses.stName}>
                  Gral. Negrete 33
                </TextMedium>
                <TextRegular>Centro, 58600</TextRegular>
                <TextRegular>Zacapu, Michoacán</TextRegular>
              </View>
            </View>
            <TextRegular style={addresses.status}>Principal</TextRegular>
          </TouchableOpacity>
          <TouchableOpacity
            style={addresses.address}
            onPress={() => navigation.push('Edit Address')}>
            <View style={addresses.item}>
              <Image source={require(navIcon)} style={addresses.icon} />
              <View style={addresses.info}>
                <TextMedium style={addresses.stName}>
                  Guadalupe Victoria 11
                </TextMedium>
                <TextRegular>Centro, 58570</TextRegular>
                <TextRegular>Panindicuaro, Michoacán</TextRegular>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={addresses.address}
            onPress={() => navigation.push('Edit Address')}>
            <View style={addresses.item}>
              <Image source={require(navIcon)} style={addresses.icon} />
              <View>
                <TextMedium style={addresses.stName}>Berlin 21</TextMedium>
                <TextRegular>Centro, 58060</TextRegular>
                <TextRegular>Morelia, Michoacán</TextRegular>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={addresses.address}
            onPress={() => navigation.push('Add Address')}>
            <TextMedium style={addresses.addPayment}>
              Agregar dirección de envío
            </TextMedium>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Addresses;
