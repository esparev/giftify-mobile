import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const login = StyleSheet.create({
  main: {
    height: '100%',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: font.size.lg,
    color: color.primary_text,
  },
  logo: {
    width: '50%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttons: {
    rowGap: 12,
    width: '100%',
    marginTop: 60,
  },
  secondaryBtn: {},
  secondaryTxt: {
    textAlign: 'center',
    color: color.primary,
  },
  processBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 12,
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
  formErr: {
    color: color.danger,
  },
});

export default login;
