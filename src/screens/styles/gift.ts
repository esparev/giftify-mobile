import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const gift = StyleSheet.create({
  main: {
    height: '100%',
    padding: 24,
    justifyContent: 'space-between',
  },
  product: {
    rowGap: 24,
  },
  details: {
    rowGap: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  info: {
    rowGap: 4,
  },
  name: {
    fontSize: font.size.lg,
    color: color.primary_text,
  },
  meta: {
    flexDirection: 'row',
    columnGap: 4,
  },
  ratingStar: {
    width: 24,
    height: 24,
  },
  metaText: {
    fontSize: font.size.sm,
    color: color.tertiary_text,
  },
  description: {
    fontSize: font.size.sm,
    color: color.secondary_text,
  },
  type: {
    rowGap: 12,
  },
  typeText: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
  buttons: {
    columnGap: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: font.size.base,
  },
  //? Active type styles
  buttonActive: {
    backgroundColor: color.primary,
  },
  buttonTextActive: {
    color: color.primary_text,
  },
  //! Active type styles
  buttonInactive: {
    backgroundColor: color.foreground,
  },
  buttonTextInactive: {
    color: color.secondary_text,
  },
  footer: {
    rowGap: 20,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityModifier: {
    flexDirection: 'row',
    columnGap: 32,
  },
  addQuantity: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  quantityItems: {
    fontSize: 20,
    color: color.primary_text,
  },
  removeQuantity: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.foreground,
  },
  quantityText: {
    fontSize: font.size.base,
    color: color.secondary_text,
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    columnGap: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  totalText: {
    fontSize: font.size.base,
    color: color.secondary_text,
  },
  totalValue: {
    fontSize: 20,
    color: color.primary_text,
  },
  checkoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 52,
    borderRadius: 8,
    backgroundColor: color.primary,
  },
  checkoutText: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
});

export default gift;
