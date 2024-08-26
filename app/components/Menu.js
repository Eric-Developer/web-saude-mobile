import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

const Menu = () => {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="home" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="information-circle" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Ionicons name="person" size={24} color="gray" onPress={() => navigation.navigate('Login-Registrer')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});

export default Menu;