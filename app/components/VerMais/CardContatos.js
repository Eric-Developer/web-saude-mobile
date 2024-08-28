import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function CardContatos({unidade}) {
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
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={startAnimation}
        onPressOut={resetAnimation}
        activeOpacity={0.8}
      >
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Contatos</Text>
            <View style={styles.divider} />
          </View>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
            <View style={styles.row}>
              <MaterialIcons name="email" size={24} color="black" />
              <Text style={styles.text}>{unidade.email}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
            <View style={styles.row}>
              <FontAwesome name="instagram" size={24} color="black" />
              <Text style={styles.text}>{unidade.instagram}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
            <View style={styles.row}>
              <FontAwesome5 name="whatsapp" size={24} color="black" />
              <Text style={styles.text}>{unidade.whatsapp}</Text>
            </View>
          </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
});
