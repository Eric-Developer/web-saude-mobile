import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Certifique-se de ter o react-native-vector-icons instalado

const { width } = Dimensions.get('window');

const CardUsuarios = ({ onChangePassword, onDelete }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.userInfo}>
            <Icon name="account-circle" size={60} color="#ccc" style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>Nome do Usuário</Text>
              <Text style={styles.status}>ativo</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={onChangePassword} style={styles.button}>
              Nova Senha
            </Button>
            <Button mode="outlined" onPress={onDelete} style={styles.button}>
              Deletar
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: width * 0.9,
    padding: 16,
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginBottom: 16,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
   
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    fontSize:6
    
  },
});

export default CardUsuarios;
