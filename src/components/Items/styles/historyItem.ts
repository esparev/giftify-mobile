import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const historyItem = StyleSheet.create({
  card: {
    rowGap: 8,
    padding: 12,
    borderRadius: 12,
    backgroundColor: color.foreground,
  },
  info: {
    rowGap: 4,
  },
  order: {
    fontSize: 20,
    color: color.primary_text,
  },
  qty: {
    fontSize: font.size.sm,
    color: color.secondary_text,
  },
  datePrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: font.size.sm,
    color: color.secondary_text,
  },
  price: {
    fontSize: font.size.base,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: color.secondary_text,
  },
  gift: {
    columnGap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontSize: font.size.base,
    color: color.primary_text,
  },
  imgContainer: {
    width: 48,
    height: 48,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  btn: {
    alignSelf: 'flex-end',
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 6,
    backgroundColor: color.primary,
  },
  btnTxt: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
});

export default historyItem;
