import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const profile = StyleSheet.create({
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
  info: {},
  name: {
    fontSize: font.size.lg,
    color: color.primary_text,
  },
  seeProfile: {
    fontSize: font.size.base,
    color: color.primary,
  },
  settings: {
    rowGap: 16,
  },
  item: {
    padding: 8,
    columnGap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  red: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: color.danger30,
  },
  green: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: color.success30,
  },
  yellow: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: color.warning30,
  },
  blue: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: color.info30,
  },
  text: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
});

export default profile;
