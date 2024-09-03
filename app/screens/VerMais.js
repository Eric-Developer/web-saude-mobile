import React from 'react';
import { View,ScrollView,Text ,StyleSheet,ActivityIndicator } from 'react-native';
import CardInformativo from '../components/VerMais/CardInformativo';
import CardSobre from '../components/VerMais/CardSobre';
import CardEspecialidades from '../components/VerMais/CardEspecialidades';
import CardHorario from '../components/VerMais/CardHorario';
import CardContatos from '../components/VerMais/CardContatos';
import Galeria from '../components/VerMais/Galeria';
import Comentarios from '../components/VerMais/Comentarios';
import FormComentario from '../components/VerMais/FormComentario';
import useUnidadesDeSaude from '../Hooks/useUnidadesDeSaude';

export default function VerMaisPage({route}){
  const { unidade } = route.params;
  console.log(unidade)

  const { unidadesPeloNome, loading, error } = useUnidadesDeSaude(unidade,'','');
 console.log(unidadesPeloNome)
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View>
          <CardInformativo unidade={unidadesPeloNome}/>
          <CardSobre unidade={unidadesPeloNome}/>
          <CardEspecialidades unidade={unidadesPeloNome}/>
          <CardHorario unidade={unidadesPeloNome}/>
          <CardContatos unidade={unidadesPeloNome}/>
          <Comentarios/>
          <FormComentario/>
        </View>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, 
  },
});
