import React, { useState } from 'react';
import { TouchableOpacity, View, Image, TextInput } from 'react-native'; // prettier-ignore
import { ApolloError } from '@apollo/client';
import { SearchScreenProps } from '../@types';
import useGiftsByCategory from '../graphql/useGiftsByCategory';
import useGiftsBySearchInput from '../graphql/useGiftsBySearchInput';
import { TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import GiftList from '../components/Lists/GiftList';
import Filters from '../modals/Filters';
import icon from '../styles/icon';
import search from './styles/search';

const searchIcon = '../assets/icons/search.png';
const adjustments = '../assets/icons/adjustments.png';

const SearchResult = (props: SearchScreenProps): JSX.Element => {
  const { route: { params: { category } } } = props; // prettier-ignore
  const { route: { params: { searchInput } } } = props; // prettier-ignore
  const [modalVisible, setModalVisible] = useState(false);
  const { loading, error, data } = useGiftsByCategory(category);
  const {
    loading: loading2,
    error: error2,
    data: data2,
  } = useGiftsBySearchInput(searchInput);

  let filteredGifts;

  if (category) {
    filteredGifts = data?.giftsByCategory;
  } else if (searchInput) {
    filteredGifts = data2?.giftsBySearchInput;
  }

  return (
    <View>
      <View style={search.main}>
        {/* Header */}
        <Header title="Buscar" isNestedScreen />
        {/* Search */}
        <View style={search.tools}>
          <TouchableOpacity
            style={search.filter}
            onPress={() => setModalVisible(true)}>
            <Image source={require(adjustments)} style={icon.size} />
          </TouchableOpacity>
          <View style={search.searchbar}>
            <Image source={require(searchIcon)} style={icon.size} />
            <TextInput
              style={search.input}
              placeholder="¿Qué quieres regalar?"
            />
          </View>
        </View>
        {/* Explore/Categories */}
        <View style={{ rowGap: 16, height: '100%', paddingBottom: 100 }}>
          <TextSemiBold style={search.title}>Resultados</TextSemiBold>
          <GiftList gifts={filteredGifts} />
        </View>
      </View>
      {/* Filters Modal */}
      <Filters modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default SearchResult;
