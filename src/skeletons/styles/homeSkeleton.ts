import { StyleSheet } from 'react-native';
import color from '../../styles/color';

const homeSkeleton = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    rowGap: 16,
    width: '47%',
    borderRadius: 12,
    backgroundColor: color.foreground,
    overflow: 'hidden',
    paddingBottom: 16,
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 100,
    backgroundColor: color.tertiary_text50,
  },
  nameContainer: {
    rowGap: 8,
  },
  name: {
    height: 20,
    marginHorizontal: 16,
    borderRadius: 4,
    backgroundColor: color.tertiary_text50,
  },
  nameShort: {
    width: '40%',
    height: 20,
    marginHorizontal: 16,
    borderRadius: 4,
    backgroundColor: color.tertiary_text50,
  },
  nameFooter: {
    flex: 1,
    height: 20,
    marginHorizontal: 16,
    borderRadius: 4,
    backgroundColor: color.tertiary_text50,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default homeSkeleton;
