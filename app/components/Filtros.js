import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';

function ClinicasFilter({ onFilterChange, resetEspecialidade }) {
  const [clinica, setClinica] = useState('');

  const handleChange = (value) => {
    setClinica(value);
    onFilterChange({ clinica: value });
    if (value) {
      resetEspecialidade(); // Limpa o filtro de especialidade ao selecionar uma clínica
    }
  };

  return (
    <View style={[styles.filterContainer, styles.pickerContainer]}>
      <Picker
        selectedValue={clinica}
        onValueChange={handleChange}
        style={styles.pickerOne}
      >
        <Picker.Item label="Filtros" value="" />
        <Picker.Item label="Hospital" value="Hospital" />
        <Picker.Item label="Hospital B" value="Hospital B" />
        <Picker.Item label="Clínica C" value="Clínica C" />
      </Picker>
      <Icon name="caret-down" size={20} color="#f9f9f1" style={styles.pickerIcon} />
    </View>
  );
}

function EspecialidadesFilter({ onFilterChange, resetClinica }) {
  const [especialidade, setEspecialidade] = useState('');
  const [especialidades, setEspecialidades] = useState([]);
  const [loading, setLoading] = useState(true); // Para controlar o estado de carregamento

  useEffect(() => {
    // Função para buscar as especialidades da API
    const fetchEspecialidades = async () => {
      try {
        const response = await fetch('https://api-web-saude.vercel.app/especialidades');
        const data = await response.json();
        setEspecialidades(data); // Atualiza o estado com as especialidades recebidas
        setLoading(false); // Define o carregamento como concluído
      } catch (error) {
        console.error('Erro ao buscar especialidades:', error);
        setLoading(false); // Define o carregamento como concluído mesmo em caso de erro
      }
    };

    fetchEspecialidades(); // Chama a função ao montar o componente
  }, []);

  const handleChange = (value) => {
    setEspecialidade(value);
    onFilterChange({ especialidade: value });
    if (value) {
      resetClinica(); // Limpa o filtro de clínica ao selecionar uma especialidade
    }
  };

  return (
    <View style={[styles.filterContainer, styles.pickerContainer]}>
      {loading ? (
        <ActivityIndicator size="small" color="#00285f" />
      ) : (
        <Picker
          selectedValue={especialidade}
          onValueChange={handleChange}
          style={styles.pickerTwo}
        >
          <Picker.Item label="Especialidades" value="" />
          {especialidades.map((item, index) => (
            <Picker.Item label={item.nome} value={item.nome} key={index} />
          ))}
        </Picker>
      )}
      <Icon name="caret-down" size={20} color="#f9f9f1" style={styles.pickerIcon} />
    </View>
  );
}

export default function Filtros() {
  const [filters, setFilters] = useState({
    clinica: '',
    especialidade: '',
  });
  const navigation = useNavigation();

  const handleFilterChange = (newFilters) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);

    // Navegue para a tela de resultados com os filtros aplicados
    navigation.replace('TelaDeResultadosPorFiltros', { filters: updatedFilters });

  };

  const resetClinica = () => {
    setFilters((prevFilters) => ({ ...prevFilters, clinica: '' }));
  };

  const resetEspecialidade = () => {
    setFilters((prevFilters) => ({ ...prevFilters, especialidade: '' }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.filtersWrapper}>
        <ClinicasFilter onFilterChange={handleFilterChange} resetEspecialidade={resetEspecialidade} />
        <EspecialidadesFilter onFilterChange={handleFilterChange} resetClinica={resetClinica} />
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
