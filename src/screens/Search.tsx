import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Image, TextInput } from 'react-native'; // prettier-ignore
import { TextSemiBold } from '../components/CustomText';
import Header from '../components/Header';
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
      <View>
        <TextSemiBold style={search.title}>Explorar</TextSemiBold>
      </View>
    </SafeAreaView>
  );
};

export default Search;
