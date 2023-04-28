import {StyleSheet} from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const giftItem = StyleSheet.create({
  card: {
    width: '47%',
    borderRadius: 12,
    backgroundColor: color.foreground,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100,
  },
  info: {
    width: '100%',
    padding: 16,
    rowGap: 16,
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
  rating: {
    flexDirection: 'row',
    columnGap: 4,
  },
  ratingStar: {
    width: 24,
    height: 24,
  },
  ratingText: {
    color: color.tertiary_text,
    fontSize: font.size.sm,
  },
  price: {
    color: color.secondary_text,
    fontSize: font.size.sm,
  },
});

export default giftItem;
