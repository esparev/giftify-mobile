import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const cartSkeleton = StyleSheet.create({
  card: {
    width: '100%',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.foreground,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    backgroundColor: color.tertiary_text50,
  },
  info: {
    flex: 1,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 12,
    rowGap: 12,
    justifyContent: 'space-between',
  },
  nameContainer: {
    rowGap: 8,
  },
  name: {
    height: 20,
    borderRadius: 4,
    backgroundColor: color.tertiary_text50,
  },
  nameShort: {
    width: '45%',
    height: 20,
    borderRadius: 4,
    backgroundColor: color.tertiary_text50,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qtyModifier: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  qtyItems: {
    fontSize: font.size.base,
    color: color.tertiary_text50,
  },
  qtyBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.tertiary_text50,
  },
  total: {
    width: '30%',
    height: 24,
    borderRadius: 4,
    backgroundColor: color.tertiary_text50,
  },
});

export default cartSkeleton;
