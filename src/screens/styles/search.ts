import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const search = StyleSheet.create({
  main: {
    padding: 24,
    rowGap: 24,
  },
  tools: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
    justifyContent: 'space-between',
  },
  filter: {
    width: 56,
    height: 56,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: color.primary,
  },
  searchbar: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontFamily: font.regular,
    fontSize: font.size.sm,
  },
  title: {
    fontSize: font.size.lg,
    color: color.primary_text,
  },
  categories: {
    width: '100%',
    rowGap: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default search;
