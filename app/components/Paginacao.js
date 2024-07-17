import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Paginacao = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Defina o número total de páginas conforme necessário

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Você pode adicionar lógica aqui para buscar dados para a página selecionada
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.pageButton, styles.arrowButton]} onPress={goToPreviousPage}>
        <Text style={styles.arrowText}>{'<'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.pageButton, currentPage === 1 && styles.activePage]}
        onPress={() => goToPage(1)}
      >
        <Text style={styles.pageText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.pageButton, currentPage === 2 && styles.activePage]}
        onPress={() => goToPage(2)}
      >
        <Text style={styles.pageText}>2</Text>
      </TouchableOpacity>
      {/* Adicione mais botões de página conforme necessário */}
      <TouchableOpacity style={[styles.pageButton, styles.arrowButton]} onPress={goToNextPage}>
        <Text style={styles.arrowText}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pageButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  activePage: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  pageText: {
    color: '#000',
  },
  arrowButton: {
    paddingHorizontal: 5,
  },
  arrowText: {
    fontSize: 20,
  },
});

export default Paginacao;
