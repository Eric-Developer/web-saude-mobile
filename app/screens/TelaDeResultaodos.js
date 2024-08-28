import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Pesquisa from '../components/Pesquisa';
import Slogan from '../components/Slogan';
import Filtros from '../components/Filtros';
import Menu from '../components/Menu';
import Card from '../components/Card';
import Paginacao from '../components/Paginacao';

export default function TelaDeResultados() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Slogan />
        <Pesquisa onSearch={handleSearch} />
        <Filtros />
        <Card searchText={searchText} />
        <Paginacao />
      </ScrollView>
      <Menu />
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
