import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const getStarted = StyleSheet.create({
  main: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  mainTitle: {
    rowGap: -32,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 52,
    color: color.primary_text,
  },
  titlePurple: {
    fontSize: 52,
    color: color.primary,
  },
  text: {
    paddingBottom: 20,
    paddingHorizontal: 24,
    fontSize: font.size.base,
    color: color.secondary_text,
  },
  buttons: {
    rowGap: 12,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  secondaryBtn: {},
  secondaryTxt: {
    textAlign: 'center',
    color: color.primary,
  },
  mainBtn: {
    borderRadius: 8,
    paddingVertical: 12,
    backgroundColor: color.primary,
  },
  mainTxt: {
    textAlign: 'center',
    color: color.primary_text,
  },
  bg: {
    zIndex: -10,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default getStarted;
