import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextSemiBold } from '../CustomText';
import categoryItem from './styles/categoryItem';

type CategoryItemProps = {
  name: string;
  image: string;
  color: string;
};

const CategoryItem = ({
  name,
  image,
  color,
}: CategoryItemProps): JSX.Element => {
  return (
    <TouchableOpacity style={[categoryItem.card, { backgroundColor: color }]}>
      <TextSemiBold style={categoryItem.name}>{name}</TextSemiBold>
      <Image source={{ uri: image }} style={categoryItem.image} />
    </TouchableOpacity>
  );
};

export default CategoryItem;
