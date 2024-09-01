import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import Pesquisa from '../components/Pesquisa';
import Filtros from '../components/Filtros';
import Menu from '../components/Menu';
import Card from '../components/Card';
import Paginacao from '../components/Paginacao';
import useUnidadesDeSaude from '../Hooks/useUnidadesDeSaude';

export default function TelaDeResultados({ route }) {
  const { searchText } = route.params;
  const { unidadesPelaPesquisa, loading, error } = useUnidadesDeSaude('', searchText);

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Slogan />
        <Pesquisa />
        <Filtros />
        {loading ? (
          <Text style={styles.loadingText}>Carregando...</Text>
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : unidadesPelaPesquisa.length > 0 ? (
          <Card unidadesdeSaude={unidadesPelaPesquisa} />
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>Nenhuma unidade de saúde encontrada.</Text>
          </View>
        )}
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
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  noResultsText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});
