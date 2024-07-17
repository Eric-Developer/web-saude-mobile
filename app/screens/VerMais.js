import React from 'react';
import { View,ScrollView ,StyleSheet} from 'react-native';
import CardInformativo from '../components/VerMais/CardInformativo';
import CardSobre from '../components/VerMais/CardSobre';
import CardEspecialidades from '../components/VerMais/CardEspecialidades';
import CardHorario from '../components/VerMais/CardHorario';
import CardContatos from '../components/VerMais/CardContatos';
import Galeria from '../components/VerMais/Galeria';
import Comentarios from '../components/VerMais/Comentarios';
import FormComentario from '../components/VerMais/FormComentario';

export default function VerMaisPage(){
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View>
          <CardInformativo/>
          <CardSobre/>
          <CardEspecialidades/>
          <CardHorario/>
          <CardContatos/>
          <Galeria/>
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
