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
import filters from './styles/filters';
import icon from '../styles/icon';

type CheckoutModalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const close = '../assets/icons/close.png';
const mastercard = '../assets/icons/mastercard.png';

const Filters = ({
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
            <TextSemiBold style={deleteModal.title}>
              Ordenar y filtrar
            </TextSemiBold>
            <TouchableOpacity>
              <TextMedium style={filters.clean}>Limpiar</TextMedium>
            </TouchableOpacity>
          </View>
          {/* Sort */}
          <View style={filters.sort}>
            <TextMedium style={filters.title}>Ordenar</TextMedium>
            <View style={filters.sortItems}>
              <TouchableOpacity style={filters.sortItem}>
                <TextRegular style={filters.sortTxt}>Más popular</TextRegular>
              </TouchableOpacity>
              <TouchableOpacity style={filters.sortItem}>
                <TextRegular style={filters.sortTxt}>Calificación</TextRegular>
              </TouchableOpacity>
              <TouchableOpacity style={filters.sortItem}>
                <TextRegular style={filters.sortTxt}>
                  Tiempo de entrega
                </TextRegular>
              </TouchableOpacity>
            </View>
          </View>
          {/* Line */}
          <View style={checkout.line}></View>
          {/* Categories */}
          <View style={filters.categories}>
            <TextMedium style={filters.title}>Categorías</TextMedium>
            <View style={filters.categoriesItems}>
              <TouchableOpacity style={filters.categoryItem}>
                <TextRegular style={filters.categoriesTxt}>
                  Eco friendly
                </TextRegular>
              </TouchableOpacity>
              <TouchableOpacity style={filters.categoryItem}>
                <TextRegular style={filters.categoriesTxt}>Amigos</TextRegular>
              </TouchableOpacity>
              <TouchableOpacity style={filters.categoryItem}>
                <TextRegular style={filters.categoriesTxt}>Parejas</TextRegular>
              </TouchableOpacity>
              <TouchableOpacity style={filters.categoryItem}>
                <TextRegular style={filters.categoriesTxt}>
                  Graduación
                </TextRegular>
              </TouchableOpacity>
              <TouchableOpacity style={filters.categoryItem}>
                <TextRegular style={filters.categoriesTxt}>
                  Cumpleaños
                </TextRegular>
              </TouchableOpacity>
            </View>
          </View>
          {/* Line */}
          <View style={checkout.line}></View>
          {/* Price range */}
          <View style={filters.priceRange}>
            <TextMedium style={filters.title}>Rango de precio</TextMedium>
            <View style={filters.prices}>
              <TouchableOpacity style={filters.priceItem}>
                <TextRegular style={filters.priceTxt}>$</TextRegular>
              </TouchableOpacity>
              <TouchableOpacity style={filters.priceItem}>
                <TextRegular style={filters.priceTxt}>$$</TextRegular>
              </TouchableOpacity>
              <TouchableOpacity style={filters.priceItem}>
                <TextRegular style={filters.priceTxt}>$$$</TextRegular>
              </TouchableOpacity>
              <TouchableOpacity style={filters.priceItem}>
                <TextRegular style={filters.priceTxt}>$$$$</TextRegular>
              </TouchableOpacity>
            </View>
          </View>
          {/* Buttons */}
          <View style={deleteModal.buttons}>
            <TouchableOpacity
              style={[deleteModal.btn, deleteModal.btnPrimary]}
              onPress={() => setModalVisible(false)}>
              <TextMedium
                style={[deleteModal.btnTxt, deleteModal.btnTxtPrimary]}>
                Aplicar
              </TextMedium>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Filters;
