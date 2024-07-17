import React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import Header from '../components/Header';
import Pesquisa from '../components/Pesquisa';
import Slogan from '../components/Slogan';
import Filtros from '../components/Filtros';
import Menu from '../components/Menu';
import Card from '../components/Card'
import Paginacao from '../components/Paginacao';

export default function HomePage() {
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Slogan/>
        <Pesquisa/>
        <Filtros/>
        <Card/>
        <Card/>
        <Card/>
        <Paginacao/>
      </ScrollView>
      <Menu/>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, 
  },
});
