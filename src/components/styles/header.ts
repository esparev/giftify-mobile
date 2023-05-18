import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const header = StyleSheet.create({
  container: {
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: font.size.lg,
    color: color.primary_text,
  },
});

export default header;
