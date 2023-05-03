import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const cartItem = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.foreground,
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 12,
    rowGap: 12,
    justifyContent: 'space-between',
  },
  name: {
    width: '100%',
    fontSize: font.size.base,
    color: color.primary_text,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qtyModifier: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  addQty: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  qtyItems: {
    fontSize: font.size.sm,
    color: color.primary_text,
  },
  removeQty: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.tertiary_text,
  },
  total: {
    fontSize: font.size.sm,
    color: color.secondary_text,
  },
});

export default cartItem;
