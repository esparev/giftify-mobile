import React from 'react';
import { FlatList } from 'react-native';
import { AddressListProps } from '../../@types/index';
import AddressItem from '../Items/AddressItem';

const AddressList = (props: AddressListProps): JSX.Element => {
  const { addresses } = props;

  return (
    <FlatList
      data={addresses}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={address => String(address.id)}
      renderItem={({ item }) => <AddressItem address={item} />}
    />
  );
};

export default AddressList;
