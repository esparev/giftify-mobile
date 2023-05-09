import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const checkout = StyleSheet.create({
  items: {
    rowGap: 12,
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nestedItems: {
    columnGap: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 48,
    height: 27.43,
  },
  count: {
    width: 24,
    height: 24,
    borderRadius: 12,
    textAlign: 'center',
    color: color.primary_text,
    backgroundColor: color.tertiary_text,
  },
  txt: {
    color: color.primary_text,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: color.secondary_text,
  },
});

export default checkout;
