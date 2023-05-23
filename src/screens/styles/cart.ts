import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const cart = StyleSheet.create({
  main: {
    height: '100%',
    padding: 24,
    rowGap: 24,
    justifyContent: 'space-between',
  },
  skeletonMain: {
    padding: 24,
    rowGap: 24,
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
  emptyCart: {
    top: -60,
    rowGap: -60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartImg: {
    width: '40%',
    resizeMode: 'contain',
  },
  emptyInfo: {
    alignItems: 'center',
  },
  emptyCartTitle: {
    fontSize: 24,
    color: color.primary_text,
  },
  emptyCartText: {},
});

export default cart;
