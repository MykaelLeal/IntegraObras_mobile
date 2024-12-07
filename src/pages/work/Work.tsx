import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/Routes";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker as RNPicker } from '@react-native-picker/picker';

import styles from "./WorkStyles";

type WorkScreenStackNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Work'>;

const Work = () => {
  const navigation = useNavigation<WorkScreenStackNavigationProp>();

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    responsavel: '',
    contratante: '',
    endereco: '',
    dataInicio: '',
    dataFinal: '',
    numeroContrato: '',
    imagem: '',
    status: ''
  });

  const formatData = (data: string) => {
    const apenasNumeros = data.replace(/\D/g, '');

    const formatada = apenasNumeros
      .replace(/^(\d{2})(\d)/, '$1/$2') // Adiciona a primeira barra após o dia
      .replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3'); // Adiciona a segunda barra após o mês
  
    // Limita a data a 10 caracteres no formato DD/MM/AAAA
    return formatada.substring(0, 10);
  };

  // Função para atualizar os dados do formulário
  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Função para escolher a imagem
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setFormData({ ...formData, imagem: result.assets[0].uri });
    }
  };

  const handleFinalizar = async () => {
    try {
      // Exibe os dados no console
      console.log("Form Data:", formData);
  
      // Armazenando os dados no AsyncStorage
      await AsyncStorage.setItem('workData', JSON.stringify(formData));
  
      // Exibe um alerta com os dados armazenados
      Alert.alert("Dados armazenados com sucesso!", JSON.stringify(formData));
  
      // Navegar para a tela de ViewWorks
      navigation.navigate('ViewWorks');
    } catch (error) {
      console.error('Erro ao salvar os dados no AsyncStorage', error);
      Alert.alert('Erro ao salvar os dados', 'Houve um problema ao salvar os dados.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
         <Text style={styles.title}>Gerenciar Obra</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={formData.nome}
          onChangeText={(text) => handleInputChange('nome', text)}
        />

        <Text style={styles.label}>Responsável</Text>
        <TextInput
          style={styles.input}
          value={formData.responsavel}
          onChangeText={(text) => handleInputChange('responsavel', text)}
        />

        <Text style={styles.label}>Contratante</Text>
        <TextInput
          style={styles.input}
          value={formData.contratante}
          onChangeText={(text) => handleInputChange('contratante', text)}
        />

        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          value={formData.endereco}
          onChangeText={(text) => handleInputChange('endereco', text)}
        />

        <View style={styles.dataCalendary}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Data Início</Text>
            <TextInput
              style={styles.inputData}
              value={formData.dataInicio}
              placeholder="DD/MM/AAAA"
              keyboardType="numeric"
              onChangeText={(text) => handleInputChange('dataInicio', formatData(text))}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Data Final</Text>
            <TextInput
              style={styles.inputData}
              value={formData.dataFinal}
              placeholder="DD/MM/AAAA"
              keyboardType="numeric"
              onChangeText={(text) => handleInputChange('dataFinal', formatData(text))}
            />
          </View>
        </View>

        <Text style={styles.label}>Status</Text>
          <RNPicker
            selectedValue={formData.status}
            onValueChange={(itemValue) => handleInputChange('status', itemValue)} // Atualiza o status
            style={styles.statusInput}
          >
            <RNPicker.Item label="Em andamento" value="Em andamento" />
            <RNPicker.Item label="Finalizada" value="Finalizada" />
            <RNPicker.Item label="Pendente" value="Pendente" />
          </RNPicker>

        <Text style={styles.label}>Número do Contrato</Text>
        <TextInput
          style={styles.input}
          value={formData.numeroContrato}
          onChangeText={(text) => handleInputChange('numeroContrato', text)}
        />

        {/* Botão para escolher a imagem */}
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Adicionar Imagem da Obra</Text>
        </TouchableOpacity>

        {/* Se uma imagem foi escolhida, exibe a imagem */}
        {formData.imagem && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: formData.imagem }} style={styles.selectedImage} />
          </View>
        )}

        {/* Botão "Finalizar" */}
        <TouchableOpacity style={styles.buttonCreate} onPress={handleFinalizar}>
          <Text style={styles.createText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Work;
