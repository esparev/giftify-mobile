import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Image, StatusBar } from 'react-native';
import {
  TextRegular,
  TextMedium,
  TextSemiBold,
} from '../components/CustomText';
import deleteModal from './styles/deleteModal';
import checkout from './styles/checkout';
import icon from '../styles/icon';

type CheckoutModalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const close = '../assets/icons/close.png';
const mastercard = '../assets/icons/mastercard.png';

const Checkout = ({
  modalVisible,
  setModalVisible,
}: CheckoutModalProps): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const goToScreen = (screen: string) => {
    setModalVisible(false);
    navigation.push(screen);
  };

  return (
    <View>
      <Modal
        hasBackdrop={true}
        swipeDirection="down"
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationInTiming={300}
        isVisible={modalVisible}
        animationOut="slideOutDown"
        useNativeDriverForBackdrop={true}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        onModalWillShow={() =>
          StatusBar.setBackgroundColor('rgba(17, 17, 17, 1)')
        }
        onModalWillHide={() =>
          StatusBar.setBackgroundColor('rgba(31, 31, 31, 1)')
        }
        style={deleteModal.modalContainer}>
        <View style={deleteModal.decor}></View>
        <View style={deleteModal.modal}>
          {/* Header */}
          <View style={deleteModal.header}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image source={require(close)} style={icon.size} />
            </TouchableOpacity>
            <TextSemiBold style={deleteModal.title}>Resumen</TextSemiBold>
            <View style={icon.size}></View>
          </View>
          {/* Gifts */}
          <View style={checkout.items}>
            <View style={checkout.item}>
              <View style={checkout.nestedItems}>
                <TextSemiBold style={checkout.count}>2</TextSemiBold>
                <TextSemiBold style={checkout.txt}>
                  Aurriculares inalambricos
                </TextSemiBold>
              </View>
              <TextRegular>$600</TextRegular>
            </View>
            <View style={checkout.item}>
              <View style={checkout.nestedItems}>
                <TextSemiBold style={checkout.count}>2</TextSemiBold>
                <TextSemiBold style={checkout.txt}>
                  Aurriculares inalambricos
                </TextSemiBold>
              </View>
              <TextRegular>$600</TextRegular>
            </View>
          </View>
          {/* Line */}
          <View style={checkout.line}></View>
          {/* Details */}
          <View style={checkout.items}>
            <TouchableOpacity
              style={checkout.item}
              onPress={() => goToScreen('Addresses')}>
              <TextMedium style={checkout.txt}>Dirección de envío</TextMedium>
              <TextRegular>Gral. Negrete 33, Zacapu</TextRegular>
            </TouchableOpacity>
            <TouchableOpacity
              style={checkout.item}
              onPress={() => goToScreen('Payments')}>
              <TextMedium style={checkout.txt}>Método de pago</TextMedium>
              <View style={checkout.nestedItems}>
                <Image source={require(mastercard)} style={checkout.icon} />
                <TextRegular>8014</TextRegular>
              </View>
            </TouchableOpacity>
          </View>
          {/* Line */}
          <View style={checkout.line}></View>
          {/* Total */}
          <View style={checkout.item}>
            <TextMedium style={checkout.txt}>Total</TextMedium>
            <TextRegular>$1,200</TextRegular>
          </View>
          {/* Buttons */}
          <View style={deleteModal.buttons}>
            <TouchableOpacity
              style={[deleteModal.btn, deleteModal.btnSecondary]}
              onPress={() => setModalVisible(false)}>
              <TextMedium
                style={[deleteModal.btnTxt, deleteModal.btnTxtSecondary]}>
                Cancelar
              </TextMedium>
            </TouchableOpacity>
            <TouchableOpacity
              style={[deleteModal.btn, deleteModal.btnPrimary]}
              onPress={() => setModalVisible(false)}>
              <TextMedium
                style={[deleteModal.btnTxt, deleteModal.btnTxtPrimary]}>
                Pagar
              </TextMedium>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Checkout;
