import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import CardUsuarios from '../components/dashboard/CardUsuarios';
import ProgressSummary from '../components/dashboard/Progressos';



export default function Admin() {
  return (
    <View style={styles.container}>
          
      <ProgressSummary />
      <View style={styles.header}>
        <Icon name="group" size={24} color="#000" style={styles.icon} />
        <Text style={styles.title}>Usuários</Text>
      </View>
      <CardUsuarios />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
