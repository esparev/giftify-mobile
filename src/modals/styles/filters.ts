import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import font from '../../styles/font';

const filters = StyleSheet.create({
  clean: {
    textAlign: 'right',
    fontSize: font.size.sm,
    color: color.primary,
  },
  title: {
    fontSize: font.size.base,
    color: color.primary_text,
  },
  sort: {
    rowGap: 12,
  },
  sortItems: {
    rowGap: 20,
  },
  sortItem: {},
  sortTxt: {
    fontSize: font.size.sm,
    color: color.secondary_text,
  },
  categories: {
    rowGap: 12,
  },
  categoriesItems: {
    gap: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  categoryItem: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 14,
    backgroundColor: color.tertiary_text,
  },
  categoriesTxt: {
    fontSize: font.size.sm,
    color: color.primary_text,
  },
  priceRange: {
    rowGap: 12,
  },
  prices: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceItem: {
    width: 72,
    borderRadius: 100,
    backgroundColor: color.tertiary_text,
  },
  priceTxt: {
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: font.size.sm,
    color: color.primary_text,
  },
});

export default filters;
