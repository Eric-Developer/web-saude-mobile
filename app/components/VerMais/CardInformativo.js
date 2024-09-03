import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function CardInformativo({ unidade }) {
  const isEstabelecimentoAberto = () => {
    const horaAtual = new Date().getHours();
    return horaAtual >= 8 && horaAtual < 18; 
  };

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const scrollToSection = (section) => {
    scrollViewRef.current.scrollTo({ x: section, animated: true });
  };

  const getEndereco = () => {
    const { endereco } = unidade;
    if (!endereco) return 'Endereço não disponível';

    const { rua, numero, bairro, cidade, estado, cep } = endereco;
    return `${rua || ''}, ${numero || ''} - ${bairro || ''}, ${cidade || ''} - ${estado || ''}, ${cep || ''}`;
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        {unidade.imagem ? (
          <Image
            source={{ uri: unidade.imagem }}
            style={styles.image}
            alt={unidade.nome}
          />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderText}>Imagem não disponível</Text>
          </View>
        )}
      </View>

      <View style={styles.nomeUnidadeContainer}>
        <Text style={styles.nomeUnidade}>{unidade.nome || 'Nome não disponível'}</Text>
      </View>

      <View style={styles.statusContainer}>
        <MaterialIcons name={isEstabelecimentoAberto() ? "check-circle" : "cancel"} size={24} color={isEstabelecimentoAberto() ? "green" : "red"} style={styles.icon} />
        <Text style={styles.statusText}>{isEstabelecimentoAberto() ? 'Aberto' : 'Fechado'}</Text>
      </View>

      <View style={styles.addressContainer}>
        <MaterialIcons name="location-on" size={24} color="black" style={styles.icon} />
        <Text style={styles.addressText}>{getEndereco()}</Text>
      </View>

      <ScrollView ref={scrollViewRef} horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.sectionButton} onPress={() => scrollToSection(0)}>
          <Text style={styles.sectionButtonText}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sectionButton} onPress={() => scrollToSection(200)}>
          <Text style={styles.sectionButtonText}>Horário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sectionButton} onPress={() => scrollToSection(400)}>
          <Text style={styles.sectionButtonText}>Especialidades</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sectionButton} onPress={() => scrollToSection(600)}>
          <Text style={styles.sectionButtonText}>Contatos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sectionButton} onPress={() => scrollToSection(800)}>
          <Text style={styles.sectionButtonText}>Galeria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sectionButton} onPress={() => scrollToSection(1000)}>
          <Text style={styles.sectionButtonText}>Comentários</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ccc',
    height: 200, 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imagePlaceholder: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#999',
    fontSize: 16,
  },
  nomeUnidadeContainer: {
    alignItems: 'center',
    marginBottom: 6,
  },
  nomeUnidade: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  statusText: {
    fontSize: 15,
    marginLeft: 8,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  addressText: {
    fontSize: 15,
    marginLeft: 8,
    flex: 1,
  },
  scheduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  scheduleText: {
    fontSize: 14,
    marginLeft: 8,
  },
  icon: {
    marginRight: 4,
  },
  sectionButton: {
    backgroundColor: '#00285f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  sectionButtonText: {
    color: '#f9f9f1',
    fontSize: 16,
  },
});
