import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import medicos from '../assets/imgs/medicos1.png';

const Slogan = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.nome}>Web Saúde</Text>
        <Text style={styles.slogan}>A Saúde mais perto de você</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={medicos} />
        </View>
        <View style={styles.content}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
  },
  card: {
    width: '90%',
    height: 350,
    backgroundColor: '#00285f',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    elevation: 10,

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9, 
    shadowRadius: 5, 
    elevation: 5,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nome: {
    color: '#f9f9f1',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  slogan: {
    color: '#f9f9f1',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 230,
  },
  
});

export default Slogan;
