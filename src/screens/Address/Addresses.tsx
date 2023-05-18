import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { UserIdProps } from '../../@types';
import {
  TextRegular,
  TextMedium,
  TextSemiBold,
} from '../../components/CustomText';
import Header from '../../components/Header';
import AddressList from '../../components/Lists/AddressList';
import addresses from './styles/addresses';

const emptyAddress = '../../assets/icons/home-detail.png';

const useAddresses = (userId: string) => {
  const query = gql`
    query GetAddresses($userId: UUID!) {
      addresses(userId: $userId) {
        id
        streetName
        streetName
        streetNumber
        postalCode
        city
        area
        locality
        country
      }
    }
  `;
  return useQuery(query, { variables: { userId: userId } });
};

const Addresses = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const { loading, error, data } = useAddresses(userId);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const isEmptyAddress = false;

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
