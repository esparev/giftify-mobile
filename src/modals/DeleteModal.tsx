import React from 'react';
import Modal from 'react-native-modal';
import { TouchableOpacity, View, Image, StatusBar } from 'react-native';
import {
  TextRegular,
  TextMedium,
  TextSemiBold,
} from '../components/CustomText';
import deleteModal from './styles/deleteModal';
import icon from '../styles/icon';

type DeleteModalProps = {
  title: string;
  description: string;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const close = '../assets/icons/close.png';

const DeleteModal = ({
  title,
  description,
  modalVisible,
  setModalVisible,
}: DeleteModalProps): JSX.Element => {
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
            <TextSemiBold style={deleteModal.title}>{title}</TextSemiBold>
            <View style={icon.size}></View>
          </View>
          {/* Body */}
          <View style={deleteModal.body}>
            <TextRegular style={deleteModal.text}>{description}</TextRegular>
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
                Eliminar
              </TextMedium>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DeleteModal;
