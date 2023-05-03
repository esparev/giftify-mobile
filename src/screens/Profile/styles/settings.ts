import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const settings = StyleSheet.create({
  main: {
    padding: 24,
    rowGap: 24,
  },
  profile: {
    columnGap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  info: {
    rowGap: -4,
  },
  name: {
    fontSize: font.size.lg,
    color: color.primary_text,
  },
  username: {
    fontSize: font.size.sm,
    color: color.secondary_text,
  },
});

export default settings;
