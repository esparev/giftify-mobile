import React from 'react';
import { FlatList } from 'react-native';
import { GiftListProps } from '../../@types/index';
import GiftItem from '../Items/GiftItem';

const GiftList = (props: GiftListProps): JSX.Element => {
  const { gifts } = props;

  return (
    <FlatList
      data={gifts}
      numColumns={2}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={gift => String(gift.id)}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      renderItem={({ item }) => <GiftItem gift={item} />}
    />
  );
};

export default GiftList;
