import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native'

export default function Card() {

    const isEstabelecimentoAberto = () => {
        const horaAtual = new Date().getHours();
        return horaAtual >= 8 && horaAtual < 18; 
    };

    
    const nomeUnidadeSaude = "Nome da Unidade de Saúde"
    
    const navigation = useNavigation()

    return (
        <View style={styles.cardContainer}>
            <View style={styles.imagePlaceholder} />
            
            <View style={styles.nomeUnidadeContainer}>
                <Text style={styles.nomeUnidade}>{nomeUnidadeSaude}</Text>
            </View>

            <View style={styles.statusContainer}>
                <MaterialIcons name={isEstabelecimentoAberto() ? "check-circle" : "cancel"} size={24} color={isEstabelecimentoAberto() ? "green" : "red"} style={styles.icon} />
                <Text style={styles.statusText}>{isEstabelecimentoAberto() ? 'Aberto' : 'Fechado'}</Text>
            </View>

            <View style={styles.addressContainer}>
                <MaterialIcons name="location-on" size={24} color="black" style={styles.icon} />
                <Text style={styles.addressText}>1234 Rua Exemplo, Bairro Exemplo, Cidade Exemplo</Text>
            </View>

            <View style={styles.scheduleContainer}>
                <MaterialIcons name="access-time" size={24} color="green" style={styles.icon} />
                <Text style={styles.scheduleText}>
                    08:00 às 18:00
                </Text>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('/Home')}>
                <Text style={styles.buttonText}>Ver Mais</Text>
            </TouchableOpacity>
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imagePlaceholder: {
        backgroundColor: '#ccc',
        height: 200, 
        marginBottom: 12,
        borderRadius: 8,
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
    button: {
        backgroundColor: '#00285f',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
