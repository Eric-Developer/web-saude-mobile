import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome'; 

function ClinicasFilter({ onFilterChange }) {
  const [clinica, setClinica] = useState('');

  const handleChange = (value) => {
    setClinica(value);
    onFilterChange({ clinica: value });
  };

  return (
    <View style={[styles.filterContainer, styles.pickerContainer]}>
      <Picker
        selectedValue={clinica}
        onValueChange={handleChange}
        style={styles.pickerOne}
      >
        <Picker.Item label="Filtros" value="" />
        <Picker.Item label="Hospital A" value="Hospital A" />
        <Picker.Item label="Hospital B" value="Hospital B" />
        <Picker.Item label="Clínica C" value="Clínica C" />
      </Picker>
      <Icon name="caret-down" size={20} color="#f9f9f1" style={styles.pickerIcon} />
    </View>
  );
}

function EspecialidadesFilter({ onFilterChange }) {
  const [especialidade, setEspecialidade] = useState('');

  const handleChange = (value) => {
    setEspecialidade(value);
    onFilterChange({ especialidade: value });
  };

  const especialidades = [
    "Cardiologia",
    "Dermatologia",
    "Ginecologia",
  ];

  return (
    <View style={[styles.filterContainer, styles.pickerContainer]}>
      <Picker
        selectedValue={especialidade}
        onValueChange={handleChange}
        style={styles.pickerTwo}
      >
        <Picker.Item label="Especialidades" value="" />
        {especialidades.map((item, index) => (
          <Picker.Item label={item} value={item} key={index} />
        ))}
      </Picker>
      <Icon name="caret-down" size={20} color="#f9f9f1" style={styles.pickerIcon} />
    </View>
  );
}

export default function Filtros() {
  const handleFilterChange = (filters) => {
    console.log('Filtros alterados:', filters);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filtersWrapper}>
        <ClinicasFilter onFilterChange={handleFilterChange} />
        <EspecialidadesFilter onFilterChange={handleFilterChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 3,
  },
  filtersWrapper: {
    flexDirection: 'row',
  },
  filterContainer: {
    margin: 8,
    position: 'relative',
    backgroundColor: 'white', 
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    }),
  },
  pickerOne: {
    width: 125,
    height: 50,
    backgroundColor: '#00285f',
    color: '#f9f9f1',
  },
  pickerTwo: {
    width: 150,
    height: 50,
    backgroundColor: '#00285f',
    color: '#f9f9f1',
  },
  pickerIcon: {
    position: 'absolute',
    right: 18,
    top: '50%',
    transform: [{ translateY: -10 }], 
  },
});
