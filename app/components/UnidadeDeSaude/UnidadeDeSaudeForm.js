import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function UnidadeDeSaudeForm() {
  const [unitName, setUnitName] = useState('');
  const [image, setImage] = useState('');
  const [unitType, setUnitType] = useState('');
  const [specialties, setSpecialties] = useState('');
  const [isOpenAllDay, setIsOpenAllDay] = useState(false);
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [isSaturdayDifferent, setIsSaturdayDifferent] = useState(false);
  const [openTimeSaturday, setOpenTimeSaturday] = useState('');
  const [closeTimeSaturday, setCloseTimeSaturday] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOptionFields, setShowOptionFields] = useState({
    longitude: false,
    latitude: false,
    whatsapp: false,
    instagram: false,
    email: false,
  });

  const animatedValue = useState(new Animated.Value(0))[0];

  useEffect(() => {
    animateForm(); 
  }, []);

  const handleSave = () => {
    console.log('Nome da Unidade de Saúde:', unitName);
    console.log('Imagem:', image);
    console.log('Tipo de Unidade:', unitType);
    console.log('Especialidades:', specialties);
    console.log('Aberto o dia todo:', isOpenAllDay ? 'Sim' : 'Não');
    if (!isOpenAllDay) {
      console.log('Horário de Funcionamento:', openTime, ' - ', closeTime);
      if (isSaturdayDifferent) {
        console.log('Horário de Funcionamento aos Sábados:', openTimeSaturday, ' - ', closeTimeSaturday);
      }
    }
    console.log('CEP:', cep);
    console.log('UF:', uf);
    console.log('Cidade:', city);
    console.log('Bairro:', neighborhood);
    console.log('Número:', number);
    console.log('Longitude:', longitude);
    console.log('Latitude:', latitude);
    console.log('Descrição:', description);
    console.log('Email:', email);
    console.log('Instagram:', instagram);
    console.log('WhatsApp:', whatsapp);
    console.log('Outras Opções:', selectedOptions);
  };

  const animateForm = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const containerStyle = {
    opacity: animatedValue,
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0], // Move from bottom to initial position
        }),
      },
    ],
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((item) => item !== option);
      } else {
        return [...prevOptions, option];
      }
    });

    setShowOptionFields((prevFields) => ({
      ...prevFields,
      [option]: !prevFields[option],
    }));
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.formContainer, containerStyle]}>
        <Text style={styles.title}>Cadastrar Unidade de Saúde</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome da unidade de saúde"
          value={unitName}
          onChangeText={setUnitName}
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={unitType}
            style={[styles.picker, unitType ? styles.pickerSelected : null]}
            onValueChange={(itemValue, itemIndex) => setUnitType(itemValue)}
          >
            <Picker.Item label="Tipo" value="" />
            <Picker.Item label="Clínica" value="Clinica" />
            <Picker.Item label="Hospital" value="Hospital" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={specialties}
            style={[styles.picker, unitType ? styles.pickerSelected : null]}
            onValueChange={(itemValue, itemIndex) => setSpecialties(itemValue)}
          >
            <Picker.Item label="Especialidades" value="" />
            <Picker.Item label="Cardiologia" value="Cardiologia" />
            <Picker.Item label="Ortopedia" value="Ortopedia" />
            <Picker.Item label="Pediatria" value="Pediatria" />
            {/* Adicione outras especialidades conforme necessário */}
          </Picker>
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxLabel}>Aberto o dia todo?</Text>
          <TouchableOpacity onPress={() => setIsOpenAllDay(!isOpenAllDay)}>
            <Text style={styles.checkbox}>{isOpenAllDay ? 'Sim' : 'Não'}</Text>
          </TouchableOpacity>
        </View>
        {!isOpenAllDay && (
          <>
            <View style={styles.timeContainer}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Abertura"
                value={openTime}
                onChangeText={setOpenTime}
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Fechamento"
                value={closeTime}
                onChangeText={setCloseTime}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <Text style={styles.checkboxLabel}>O horário de sábado é diferente?</Text>
              <TouchableOpacity onPress={() => setIsSaturdayDifferent(!isSaturdayDifferent)}>
                <Text style={styles.checkbox}>{isSaturdayDifferent ? 'Sim' : 'Não'}</Text>
              </TouchableOpacity>
            </View>
            {isSaturdayDifferent && (
              <>
                <View style={styles.timeContainer}>
                  <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="Abertura"
                    value={openTimeSaturday}
                    onChangeText={setOpenTimeSaturday}
                  />
                  <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="Fechamento"
                    value={closeTimeSaturday}
                    onChangeText={setCloseTimeSaturday}
                  />
                </View>
              </>
            )}
          </>
        )}
        <View style={styles.addressContainer}>
          <View style={styles.addressColumn}>
            <TextInput
              style={styles.input}
              placeholder="CEP"
              value={cep}
              onChangeText={setCep}
            />
          </View>
          <View style={styles.addressColumn}>
            <TextInput
              style={styles.input}
              placeholder="UF"
              value={uf}
              onChangeText={setUf}
            />
          </View>
          <View style={styles.addressColumn}>
            <TextInput
              style={styles.input}
              placeholder="Cidade"
              value={city}
              onChangeText={setCity}
            />
          </View>
          <View style={styles.addressColumn}>
            <TextInput
              style={styles.input}
              placeholder="Número"
              value={number}
              onChangeText={setNumber}
            />
          </View>
          <View style={styles.addressColumn}>
            <TextInput
              style={styles.input}
              placeholder="Bairro"
              value={neighborhood}
              onChangeText={setNeighborhood}
            />
          </View>
        </View>
        <View style={styles.optionsContainer}>
          <Picker
            selectedValue={selectedOptions}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) => handleOptionSelect(itemValue)}
            mode="multiple"
          >
            <Picker.Item label="Selecione as opções" value={[]} />
            <Picker.Item label="Longitude" value="longitude" />
            <Picker.Item label="Latitude" value="latitude" />
            <Picker.Item label="WhatsApp" value="whatsapp" />
            <Picker.Item label="Instagram" value="instagram" />
            <Picker.Item label="Email" value="email" />
          </Picker>
        </View>
        {selectedOptions.map((option) => {
          if (showOptionFields[option]) {
            return (
              <TextInput
                key={option}
                style={styles.input}
                placeholder={option}
                value={option === 'whatsapp' ? whatsapp : ''}
                onChangeText={option === 'whatsapp' ? setWhatsapp : null}
              />
            );
          }
          return null;
        })}
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 20
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 35,
    margin: 5
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  halfInput: {
    flex: 1,
    marginRight: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap:'wrap',
    alignItems: 'center',
    marginBottom: 10,
    maxWidth: '100%'
  },
  checkboxLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  checkbox: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  addressContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  addressColumn: {
    width: '48%', 
    marginBottom: 10,
  },
  optionsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 5,
    width: '96%',
    height: 45
  },
  picker: {
    height: '100%',
    width: '100%'
  },
  pickerSelected: {
    borderWidth: 2,
    borderColor: '#007bff',
    
  },
});
