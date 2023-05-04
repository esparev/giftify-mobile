import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const notifications = StyleSheet.create({
  main: {
    height: '100%',
    padding: 24,
    justifyContent: 'space-between',
  },
  body: {
    rowGap: 24,
  },
  imgContainer: {
    alignItems: 'center',
  },
  image: {
    width: 272,
    height: 272,
  },
  info: {},
  titleContainer: {
    rowGap: -8,
  },
  title: {
    fontSize: 24,
    color: color.secondary_text,
  },
  titlePurple: {
    color: color.primary,
  },
  text: {
    fontSize: font.size.sm,
    color: color.secondary_text,
  },
  buttons: {
    rowGap: 12,
  },
  btnText: {
    color: color.primary_text,
  },
  btnPrimary: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  btnSecondary: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.foreground,
  },
});

export default notifications;
