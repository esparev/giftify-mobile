import { StyleSheet } from 'react-native';
import color from './color';
import font from './font';

const settings = StyleSheet.create({
  form: {
    width: '100%',
    rowGap: 16,
  },
  row: {
    width: '100%',
    columnGap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputField: {
    width: '100%',
    rowGap: 8,
  },
  halfInputField: {
    flex: 1,
    width: '100%',
    rowGap: 8,
  },
  label: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
  input: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: color.primary,
    fontFamily: font.regular,
    fontSize: font.size.base,
    backgroundColor: color.foreground,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  buttonTxt: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
  secondaryBtn: {
    textAlign: 'center',
    fontSize: font.size.base,
    color: color.primary,
  },
});

export default settings;
