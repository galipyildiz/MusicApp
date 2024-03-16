import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.style';

interface SearchBarParameter {
  handleSearch: (text: string) => void;
}

const SearchBar = ({handleSearch}: SearchBarParameter) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara" onChangeText={handleSearch} />
    </View>
  );
};

export default SearchBar;
