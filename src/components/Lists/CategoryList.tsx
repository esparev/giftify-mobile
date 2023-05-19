import React from 'react';
import { FlatList } from 'react-native';
import { CategoryListProps } from '../../@types/index';
import CategoryItem from '../Items/CategoryItem';

const CategoryList = (props: CategoryListProps): JSX.Element => {
  const { categories } = props;

  return (
    <FlatList
      data={categories}
      numColumns={2}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={category => String(category.id)}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      renderItem={({ item }) => <CategoryItem category={item} />}
    />
  );
};

export default CategoryList;
