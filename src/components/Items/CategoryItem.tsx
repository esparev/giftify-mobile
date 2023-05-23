import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { CategoryProps } from '../../@types';
import { TextSemiBold } from '../CustomText';
import categoryItem from './styles/categoryItem';

const CategoryItem = (props: { category: CategoryProps }): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <TouchableOpacity
      style={[categoryItem.card, { backgroundColor: props.category.hexColor }]}
      onPress={() =>
        navigation.push('Search Result', { category: props.category.slug })
      }>
      <TextSemiBold style={categoryItem.name}>
        {props.category.name}
      </TextSemiBold>
      <Image
        source={{ uri: props.category.image }}
        style={categoryItem.image}
      />
    </TouchableOpacity>
  );
};

export default CategoryItem;
