import {StyleSheet} from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const home = StyleSheet.create({
  main: {
    padding: 24,
    rowGap: 24,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    columnGap: 8,
    flexDirection: 'row',
  },
  locationText: {
    color: color.tertiary_text,
    fontSize: font.size.sm,
  },
  locationCity: {
    color: color.primary_text,
    fontSize: font.size.sm,
  },
  cartProfile: {
    columnGap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  promotion: {
    width: '100%',
    height: 150,
  },
  promotionImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default home;
