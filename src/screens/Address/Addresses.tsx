import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { UserIdProps } from '../../@types';
import getAddresses from '../../api/getAddresses';
import { getData } from '../../storage';
import { TextRegular, TextMedium, TextSemiBold } from '../../components/CustomText'; // prettier-ignore
import Header from '../../components/Header';
import AddressList from '../../components/Lists/AddressList';
import addressesStyles from './styles/addresses';

const emptyAddress = '../../assets/icons/home-detail.png';

const Addresses = (props: UserIdProps) => {
  const { route: { params: { userId } } } = props; // prettier-ignore
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState();
  const [isEmptyAddress, setIsEmptyAddress] = useState(false);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const loadData = async () => {
    try {
      const { token } = await getData();
      const addresses = await getAddresses(userId, token);
      setAddresses(addresses);
      setIsEmptyAddress(addresses.length === 0);
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
    <View style={addressesStyles.main}>
      <Header title="Direcciones de envío" isNestedScreen />
      {isEmptyAddress ? (
        <View style={addressesStyles.emptyAddress}>
          <Image
            source={require(emptyAddress)}
            style={addressesStyles.emptyAddressImg}
          />
          <View style={addressesStyles.emptyInfo}>
            <TextSemiBold style={addressesStyles.emptyAddressTitle}>
              Sin direcciones de envío
            </TextSemiBold>
            <TextRegular style={addressesStyles.emptyAddressText}>
              Necesitas una dirección de envío para realizar compras
            </TextRegular>
            <TouchableOpacity
              style={addressesStyles.btn}
              onPress={() =>
                navigation.push('Add Address', { userId: userId })
              }>
              <TextMedium style={addressesStyles.btnText}>
                Agregar dirección de envío
              </TextMedium>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <AddressList addresses={addresses} />
          <TouchableOpacity
            style={addressesStyles.address}
            onPress={() => navigation.push('Add Address', { userId: userId })}>
            <TextMedium style={addressesStyles.addPayment}>
              Agregar dirección de envío
            </TextMedium>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Addresses;
