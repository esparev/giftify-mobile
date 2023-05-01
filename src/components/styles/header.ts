import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const header = StyleSheet.create({
  container: {
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
