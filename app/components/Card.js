import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useUnidadesDeSaude from '../Hooks/useUnidadesDeSaude';

export default function Card({unidadesdeSaude}) {
    const { loading, error } = useUnidadesDeSaude();
    const navigation = useNavigation();

    const isEstabelecimentoAberto = () => {
        const horaAtual = new Date().getHours();
        return horaAtual >= 8 && horaAtual < 18;
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Erro: {error}</Text>
            </View>
        );
    }

    return (
        <View>
            {unidadesdeSaude.length > 0 ? (
                unidadesdeSaude.map((unidade) => (
                    <View style={styles.cardContainer} key={unidade.id}>
                        <View style={styles.imagePlaceholder} />
                        
                        <View style={styles.nomeUnidadeContainer}>
                            <Text style={styles.nomeUnidade}>{unidade.nome}</Text>
                        </View>

                        <View style={styles.statusContainer}>
                            <MaterialIcons name={isEstabelecimentoAberto() ? "check-circle" : "cancel"} size={24} color={isEstabelecimentoAberto() ? "green" : "red"} style={styles.icon} />
                            <Text style={styles.statusText}>{isEstabelecimentoAberto() ? 'Aberto' : 'Fechado'}</Text>
                        </View>

                        <View style={styles.addressContainer}>
                            <MaterialIcons name="location-on" size={24} color="black" style={styles.icon} />
                            <Text style={styles.addressText}>
                                {unidade.endereco.rua}, {unidade.endereco.numero} - {unidade.endereco.bairro}, {unidade.endereco.cidade} - {unidade.endereco.uf}, {unidade.endereco.cep}
                            </Text>
                        </View>

                        <View style={styles.scheduleContainer}>
                            <MaterialIcons name="access-time" size={24} color="green" style={styles.icon} />
                            <Text style={styles.scheduleText}>
                                {unidade.horarioAbertura} às {unidade.horarioFechamento}
                            </Text>
                        </View>
                        
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerMais', { unidade: unidade.nome })}>
                            <Text style={styles.buttonText}>Ver Mais</Text>
                        </TouchableOpacity>
                    </View>
                ))
            ) : (
                <View style={styles.noDataContainer}>
                    <Text style={styles.noDataText}>Nenhuma unidade encontrada</Text>
                </View>
            )}
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
    errorContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    errorText: {
        color: 'red',
    },
    noDataContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 20,
    },
    noDataText: {
        fontSize: 18,
        color: '#888',
    },
});
