import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const signUp = StyleSheet.create({
  main: {
    height: '100%',
    padding: 24,
    justifyContent: 'center',
    rowGap: 60,
  },
  title: {
    textAlign: 'left',
    fontSize: font.size.lg,
    color: color.primary_text,
  },
  buttons: {
    rowGap: 12,
    width: '100%',
  },
  secondaryBtn: {},
  secondaryTxt: {
    textAlign: 'center',
    color: color.primary,
  },
  mainBtn: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    backgroundColor: color.primary,
  },
  mainTxt: {
    textAlign: 'center',
    color: color.primary_text,
  },
});

export default signUp;
