import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const deleteModal = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 0,
    width: '100%',
    justifyContent: 'flex-end',
  },
  decor: {
    height: 16,
    marginHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: color.tertiary_text,
  },
  modal: {
    rowGap: 20,
    paddingVertical: 28,
    paddingHorizontal: 24,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: color.foreground,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: font.size.base,
    color: color.primary_text,
  },
  body: {
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: font.size.sm,
  },
  buttons: {
    columnGap: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 8,
  },
  btnTxt: {
    fontSize: font.size.base,
  },
  //? Primary type styles
  btnPrimary: {
    backgroundColor: color.primary,
  },
  btnTxtPrimary: {
    color: color.primary_text,
  },
  //! Secondary type styles
  btnSecondary: {
    backgroundColor: color.tertiary_text,
  },
  btnTxtSecondary: {
    color: color.primary_text,
  },
});

export default deleteModal;
