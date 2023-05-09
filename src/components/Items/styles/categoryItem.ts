import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
import font from '../../../styles/font';

const categoryItem = StyleSheet.create({
  card: {
    width: '47%',
    padding: 16,
    paddingRight: 0,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: font.size.base,
    color: color.primary_text,
  },
  image: {
    width: 58,
    height: 96,
  },
});

export default categoryItem;
