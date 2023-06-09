import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const paymentItem = StyleSheet.create({
  method: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.tertiary_text,
  },
  card: {
    columnGap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 27.43,
    resizeMode: 'contain',
  },
  cardInfo: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
  status: {
    fontSize: font.size.base,
    color: color.secondary_text,
  },
});

export default paymentItem;
