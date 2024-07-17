import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import logo from '../../assets/imgs/foto.jpg';

const Comentarios = () => {
  // Animação para o card de comentário
  const scaleAnim = new Animated.Value(1);

  const startAnimation = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.9,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const resetAnimation = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comentários</Text>
      <View style={styles.divider} />

      <TouchableOpacity
        onPressIn={startAnimation}
        onPressOut={resetAnimation}
        activeOpacity={0.8}
      >
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
          <View style={styles.userInfo}>
            <Image
              source={logo} // Substitua pelo caminho da sua imagem de perfil
              style={styles.avatar}
            />
            <View style={styles.userInfoText}>
              <Text style={styles.userName}>Nome do Usuário</Text>
              <Text style={styles.commentDate}>Data do Comentário</Text>
            </View>
          </View>
          <Text style={styles.commentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum metus sit amet nunc mollis condimentum.</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfoText: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentDate: {
    fontSize: 14,
    color: '#666666',
  },
  commentText: {
    fontSize: 16,
  },
});

export default Comentarios;
