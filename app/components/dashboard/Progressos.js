import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ProgressBar } from 'react-native-paper';

const ProgressCard = ({ title, progress }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{title}</Text>
        <ProgressBar progress={progress} color="#6200ee" />
        <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
      </Card.Content>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <ProgressCard title="Total de Unidades de Saúde" progress={0.7} />
      <ProgressCard title="Total de Usuários" progress={0.5} />
      <ProgressCard title="Notificações" progress={0.3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#00285f',
    borderRadius:10
  },
  card: {
    width: '100%',
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressText: {
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Dashboard;
