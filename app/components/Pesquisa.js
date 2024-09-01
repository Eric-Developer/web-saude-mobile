import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Pesquisa() {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const handlePesquisa = (text) => {
    setSearchText(text);
  };

  const handleSearchSubmit = () => {
    const cleanedSearchText = searchText.trim().replace(/\s+/g, ' ');
    if (cleanedSearchText) {
      navigation.navigate('TelaDeResultados', { searchText: cleanedSearchText });
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Digite sua pesquisa"
        value={searchText}
        onChangeText={handlePesquisa}
        onClear={() => handlePesquisa('')}
        onSubmitEditing={handleSearchSubmit}
        containerStyle={styles.searchBarContainer}
        inputStyle={styles.inputSearch}
        inputContainerStyle={styles.inputContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    width: '85%',
    marginTop: 35,
    backgroundColor: '#00285f',
    borderRadius: 10,
    elevation: 4,
    padding: 15,
  },
  inputSearch: {
    backgroundColor: '#f9f9f1',
    borderRadius: 10,
  },
  inputContainerStyle: {
    backgroundColor: '#f9f9f1',
    borderRadius: 10,
  },
});
