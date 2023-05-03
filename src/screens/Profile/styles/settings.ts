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
  form: {
    rowGap: 16,
  },
  // ==================== input ====================
  inputField: {
    rowGap: 8,
  },
  label: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
  input: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: color.primary,
    fontFamily: font.regular,
    fontSize: font.size.base,
    backgroundColor: color.foreground,
  },
  updateBtn: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  updateTxt: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
});

export default settings;
