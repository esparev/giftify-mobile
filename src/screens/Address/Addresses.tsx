import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { UserIdProps } from '../../@types';
import useAddresses from '../../graphql/useAddresses';
import { TextRegular, TextMedium, TextSemiBold } from '../../components/CustomText'; // prettier-ignore
import Header from '../../components/Header';
import AddressList from '../../components/Lists/AddressList';
import addresses from './styles/addresses';

const emptyAddress = '../../assets/icons/home-detail.png';

const Addresses = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const { loading, error, data } = useAddresses(userId);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const isEmptyAddress = data?.addresses.length === 0;

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
              onPress={() =>
                navigation.push('Add Address', { userId: userId })
              }>
              <TextMedium style={addresses.btnText}>
                Agregar dirección de envío
              </TextMedium>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <AddressList addresses={data?.addresses} />
          <TouchableOpacity
            style={addresses.address}
            onPress={() => navigation.push('Add Address', { userId: userId })}>
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
