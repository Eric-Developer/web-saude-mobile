import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, ScrollView, Animated, Dimensions } from 'react-native';
import logo from '../../assets/imgs/foto.jpg';

const { width } = Dimensions.get('window');

const Galeria = ({unidade}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const startAnimation = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.9,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const resetAnimation = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria</Text>
      <View style={styles.divider} />
      
      <TouchableOpacity onPress={openModal} activeOpacity={0.8}>
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
          <Image
            source={logo} // Substitua pelo caminho da sua imagem
            style={styles.image}
            resizeMode="cover"
          />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity onPress={openModal} activeOpacity={0.8}>
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
          <Image
            source={logo} // Substitua pelo caminho da sua imagem
            style={styles.image}
            resizeMode="cover"
          />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity onPress={openModal} style={styles.verMaisButton} onPressIn={startAnimation} onPressOut={resetAnimation}>
        <Text style={styles.verMaisText}>Ver Mais</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <ScrollView horizontal={true} contentContainerStyle={styles.carousel}>
            {/* Aqui você pode adicionar mais imagens ao carrossel */}
            <Image
              source={logo} // Substitua pelo caminho da sua imagem
              style={styles.modalImage}
              resizeMode="cover"
            />
            <Image
              source={logo} // Substitua pelo caminho da sua imagem
              style={styles.modalImage}
              resizeMode="cover"
            />
            {/* Adicione mais imagens aqui */}
          </ScrollView>
          <TouchableOpacity style={styles.fecharButton} onPress={closeModal}>
            <Text style={styles.fecharText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  card: {
    width: width * 0.9,
    height: width * 0.9, // Para manter o aspecto quadrado
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
    overflow: 'hidden', // Garante que a imagem dentro do card não passe dos limites do card
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  verMaisButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  verMaisText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  fecharButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginBottom:20
  },
  fecharText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Galeria;
