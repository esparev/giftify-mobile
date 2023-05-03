import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const cart = StyleSheet.create({
  main: {
    height: '100%',
    padding: 24,
    justifyContent: 'space-between',
  },
  container: {
    rowGap: 24,
  },
  checkout: {
    rowGap: 12,
  },
  checkoutInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkoutText: {
    fontSize: font.size.base,
    color: color.secondary_text,
  },
  checkoutPrice: {
    fontSize: 20,
    color: color.primary_text,
  },
  checkoutButton: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  checkoutButtonText: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
});

export default cart;
