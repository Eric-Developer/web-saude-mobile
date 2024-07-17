import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function CardEspecialidades() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

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
    <View style={styles.container} id='#CardEspecialidades'>
      <TouchableOpacity
        onPressIn={startAnimation}
        onPressOut={resetAnimation}
        activeOpacity={0.8}
      >
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Especialidades</Text>
            <View style={styles.divider} />
          </View>
          <View style={styles.content}>
            <Text style={styles.text}></Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginTop: 40
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
  },
  content: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
