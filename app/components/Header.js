import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../assets/imgs/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={logo}/>
      <View style={styles.menuContainer}>
        <Text style={styles.welcomeText}>Olá, Eric Santos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00285f',
    paddingTop: 40, 
    position: 'fixed',
    width: '100%',
    height: 120,
    top: 0,
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: 20,
  },
 
 logo:{
  width: 80,
  height: 80,
  resizeMode: 'contain', 

 },
  menuContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
