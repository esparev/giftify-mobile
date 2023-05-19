import React, { useState } from 'react';
import { TouchableOpacity, View, Image, TextInput } from 'react-native'; // prettier-ignore
import useCategories from '../graphql/useCategories';
import { TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import CategoryList from '../components/Lists/CategoryList';
import Filters from '../modals/Filters';
import icon from '../styles/icon';
import search from './styles/search';

const searchIcon = '../assets/icons/search.png';
const adjustments = '../assets/icons/adjustments.png';

const Search = (): JSX.Element => {
  const { loading, error, data } = useCategories();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={search.main}>
        {/* Header */}
        <Header title="Buscar" />
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
          <TextSemiBold style={search.title}>Explorar</TextSemiBold>
          <CategoryList categories={data?.categories} />
        </View>
      </View>
      {/* Filters Modal */}
      <Filters modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Search;
