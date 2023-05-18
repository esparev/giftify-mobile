import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const payments = StyleSheet.create({
  main: {
    padding: 24,
    rowGap: 24,
  },
  method: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.tertiary_text,
  },
  addPayment: {
    fontSize: font.size.base,
    color: color.primary,
  },
  emptyPayment: {
    top: -100,
    rowGap: -60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyPaymentImg: {
    width: '40%',
    resizeMode: 'contain',
  },
  emptyInfo: {
    alignItems: 'center',
  },
  emptyPaymentTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: color.primary_text,
  },
  emptyPaymentText: {
    textAlign: 'center',
  },
  btn: {
    width: '100%',
    marginTop: 24,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  btnText: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
});

export default payments;
