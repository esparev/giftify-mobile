import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Image, TextInput } from 'react-native'; // prettier-ignore
import { TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
import CategoryItem from '../components/Items/CategoryItem';
import icon from '../styles/icon';
import search from './styles/search';

const searchIcon = '../assets/icons/search.png';
const adjustments = '../assets/icons/adjustments.png';

const Search = (): JSX.Element => {
  return (
    <SafeAreaView style={search.main}>
      {/* Header */}
      <Header title="Buscar" />
      {/* Search */}
      <View style={search.tools}>
        <TouchableOpacity style={search.filter}>
          <Image source={require(adjustments)} style={icon.size} />
        </TouchableOpacity>
        <View style={search.searchbar}>
          <Image source={require(searchIcon)} style={icon.size} />
          <TextInput style={search.input} placeholder="¿Qué quieres regalar?" />
        </View>
      </View>
      {/* Explore/Categories */}
      <View style={{ rowGap: 16 }}>
        <TextSemiBold style={search.title}>Explorar</TextSemiBold>
        <View style={search.categories}>
          <CategoryItem
            name="Populares"
            color="#A706C1"
            image="https://i.imgur.com/vNG9vE9.png"
          />
          <CategoryItem
            name="Regalo sorpresa"
            color="#D26500"
            image="https://i.imgur.com/D28D3F4.png"
          />
          <CategoryItem
            name="Amistad"
            color="#195498"
            image="https://i.imgur.com/kX9bLhI.png"
          />
          <CategoryItem
            name="Eco friendly"
            color="#3A9819"
            image="https://i.imgur.com/a4X9pNP.png"
          />
          <CategoryItem
            name="Amor"
            color="#981919"
            image="https://i.imgur.com/1gRSiRj.png"
          />
          <CategoryItem
            name="Graduación"
            color="#BB8600"
            image="https://i.imgur.com/gXZJegw.png"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
