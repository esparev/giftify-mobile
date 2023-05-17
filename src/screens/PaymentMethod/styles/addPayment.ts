import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const addPayment = StyleSheet.create({
  main: {
    padding: 24,
    rowGap: 24,
  },
  card: {
    width: '100%',
  },
  cardInfo: {
    padding: 24,
    rowGap: 12,
  },
  cardTitle: {
    fontSize: font.size.sm,
    color: color.secondary_text,
  },
  cardTxtMain: {
    fontSize: font.size.lg,
    color: color.primary_text,
  },
  cardNet: {
    width: 52,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  cardNum: {},
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardholder: {},
  cardExpiry: {
    alignItems: 'flex-end',
  },
  cardContainer: {
    zIndex: -10,
    width: '100%',
    position: 'relative',
  },
  cardImg: {
    top: -280,
    width: '100%',
    position: 'absolute',
    resizeMode: 'contain',
  },
});

export default addPayment;
