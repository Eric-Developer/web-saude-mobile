import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function Pesquisa() {
  const handlePesquisa = (searchText) => {
    console.log('Pesquisa realizada:', searchText);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        style={styles.searchBar}
        placeholder="Digite sua pesquisa"
        onChangeText={handlePesquisa}
        onClear={() => console.log('Pesquisa cancelada')}
        onCancel={() => console.log('Pesquisa cancelada')}
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
