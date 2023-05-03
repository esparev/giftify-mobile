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
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 8,
  },
  btnText: {
    fontSize: font.size.base,
  },
  //? Active type styles
  btnActive: {
    backgroundColor: color.primary,
  },
  btnTextActive: {
    color: color.primary_text,
  },
  //! Active type styles
  btnInactive: {
    backgroundColor: color.foreground,
  },
  btnTextInactive: {
    color: color.secondary_text,
  },
  footer: {
    rowGap: 20,
  },
  qty: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qtyModifier: {
    flexDirection: 'row',
    columnGap: 32,
  },
  addQty: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  qtyItems: {
    fontSize: 20,
    color: color.primary_text,
  },
  removeQty: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.foreground,
  },
  qtyText: {
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
  checkoutBtn: {
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
