import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const addresses = StyleSheet.create({
  main: {
    padding: 24,
    rowGap: 24,
  },
  addresses: {},
  address: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.tertiary_text,
  },
  item: {
    columnGap: 12,
    flexDirection: 'row',
  },
  info: {
    rowGap: -4,
  },
  icon: {
    width: 28,
    height: 28,
  },
  stName: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
  status: {
    fontSize: font.size.base,
    color: color.secondary_text,
  },
  addPayment: {
    fontSize: font.size.base,
    color: color.primary,
  },
  emptyAddress: {
    top: -100,
    rowGap: -60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyAddressImg: {
    width: '40%',
    resizeMode: 'contain',
  },
  emptyInfo: {
    alignItems: 'center',
  },
  emptyAddressTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: color.primary_text,
  },
  emptyAddressText: {
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

export default addresses;
