import { StyleSheet } from 'react-native';
import color from '../../styles/color';

const history = StyleSheet.create({
  main: {
    height: '100%',
    padding: 24,
    rowGap: 24,
  },
  emptyHistory: {
    top: -80,
    rowGap: -60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyHistoryImg: {
    width: '40%',
    resizeMode: 'contain',
  },
  emptyInfo: {
    alignItems: 'center',
  },
  emptyHistoryTitle: {
    fontSize: 24,
    color: color.primary_text,
  },
  emptyHistoryText: {},
});

export default history;
