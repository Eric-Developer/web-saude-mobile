import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'

const LoginButton = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar na Web Saúde</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Admin')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <Text style={styles.registerText}>
        Não tem conta? 
        <TouchableOpacity>
          <Text style={styles.registerLink}> Registre-se</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  registerText: {
    color: 'gray',
  },
  registerLink: {
    color: 'blue',
    marginLeft: 4,
  },
});

export default LoginButton;
