import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  TextRegular,
  TextMedium,
  TextSemiBold,
} from '../components/CustomText';
import getStarted from './styles/getStarted';

const GiftsBg = '../assets/static/gifts-bg.png';

const GetStarted = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={getStarted.main}>
      {/* Title */}
      <View style={getStarted.mainTitle}>
        <TextSemiBold style={getStarted.title}>La Mayor</TextSemiBold>
        <TextSemiBold style={getStarted.titlePurple}>Variedad</TextSemiBold>
        <TextSemiBold style={getStarted.title}>de Regalos</TextSemiBold>
      </View>
      <TextRegular style={getStarted.text}>
        ¡Prepárate para repartir felicidad! Desde cumpleaños hasta aniversarios
        y todo lo demás, lo tenemos cubierto.
      </TextRegular>
      {/* Buttons */}
      <View style={getStarted.buttons}>
        <TouchableOpacity
          style={getStarted.secondaryBtn}
          onPress={() => navigation.push('SignUp')}>
          <TextMedium style={getStarted.secondaryTxt}>Registrarme</TextMedium>
        </TouchableOpacity>
        <TouchableOpacity
          style={getStarted.mainBtn}
          onPress={() => navigation.push('Login')}>
          <TextMedium style={getStarted.mainTxt}>
            Ya tengo una cuenta
          </TextMedium>
        </TouchableOpacity>
      </View>
      {/* Image */}
      <Image source={require(GiftsBg)} style={getStarted.bg} />
    </View>
  );
};

export default GetStarted;
