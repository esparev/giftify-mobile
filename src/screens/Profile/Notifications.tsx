import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  TextRegular,
  TextMedium,
  TextSemiBold,
} from '../../components/CustomText';
import icon from '../../styles/icon';
import notifications from './styles/notifications';

const arrow = '../../assets/icons/arrow-left.png';
const delivery = '../../assets/static/delivery-bro.png';

const Notifications = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={notifications.main}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require(arrow)} style={icon.size} />
      </TouchableOpacity>
      {/* Body */}
      <View style={notifications.body}>
        {/* Image */}
        <View style={notifications.imgContainer}>
          <Image source={require(delivery)} style={notifications.image} />
        </View>
        {/* Info */}
        <View style={notifications.info}>
          <View style={notifications.titleContainer}>
            <TextSemiBold style={notifications.title}>
              Conoce{' '}
              <TextSemiBold style={notifications.titlePurple}>siempre</TextSemiBold>{' '}
              el
            </TextSemiBold>
            <TextSemiBold style={notifications.title}>
              estado de tu pedido
            </TextSemiBold>
          </View>
          <TextRegular style={notifications.text}>
            Las notificaciones se utilizan para proporcionar actualizaciones
            sobre tu pedido. Puedes cambiar esto más tarde en la sección de
            configuración de tu perfil.
          </TextRegular>
        </View>

        {/* Buttons */}
        <View style={notifications.buttons}>
          <TouchableOpacity style={notifications.btnPrimary}>
            <TextMedium style={notifications.btnText}>
              Activar notificaciones
            </TextMedium>
          </TouchableOpacity>
          <TouchableOpacity style={notifications.btnSecondary}>
            <TextMedium>Saltar por ahora</TextMedium>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Notifications;
