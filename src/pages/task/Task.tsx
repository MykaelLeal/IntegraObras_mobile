import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from "../../routes/Routes";
import { Picker } from "@react-native-picker/picker";
import styles from './TaskStyles';

type CreateTaskScreenStackNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateTask'>;

type FormData = {
  titulo: string;
  descricao: string;
  dataCriacao: string;
  responsavel: string;
  status: string;
  prioridade: string;
  notas: string;
};

const CreateTask = () => {
  const navigation = useNavigation<CreateTaskScreenStackNavigationProp>();
  
  const [formData, setFormData] = useState<FormData>({
    titulo: '',
    descricao: '',
    dataCriacao: '',
    responsavel: '',
    status: '',
    prioridade: '',
    notas: '',
  });

  const formatData = (data: string): string => {
    const apenasNumeros = data.replace(/\D/g, '');
    const formatada = apenasNumeros
      .replace(/^(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
    return formatada.substring(0, 10);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('taskData', JSON.stringify(formData));
      navigation.navigate('ViewTask');
      console.log('Tarefa salva com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar a tarefa:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Adicionar Tarefa</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          value={formData.titulo}
          onChangeText={(text) => handleInputChange('titulo', text)}
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          value={formData.descricao}
          onChangeText={(text) => handleInputChange('descricao', text)}
          multiline
        />

        <Text style={styles.label}>Data Criação</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          keyboardType="numeric"
          value={formData.dataCriacao}
          onChangeText={(text) => handleInputChange('dataCriacao', formatData(text))}
        />

        <Text style={styles.label}>Responsável</Text>
        <TextInput
          style={styles.input}
          value={formData.responsavel}
          onChangeText={(text) => handleInputChange('responsavel', text)}
        />

        <Text style={styles.label}>Status</Text>
        <Picker
          selectedValue={formData.status}
          onValueChange={(value) => handleInputChange('status', value)}
          style={styles.picker}
        >
          <Picker.Item label="Em andamento" value="Em andamento" />
          <Picker.Item label="Finalizado" value="Finalizado" />
          <Picker.Item label="Pendente" value="Pendente" />
        </Picker>

        <Text style={styles.label}>Prioridade</Text>
        <Picker
          selectedValue={formData.prioridade}
          onValueChange={(value) => handleInputChange('prioridade', value)}
          style={styles.picker}
        >
          <Picker.Item label="Alta" value="Alta" />
          <Picker.Item label="Média" value="Média" />
          <Picker.Item label="Baixa" value="Baixa" />
        </Picker>

        <Text style={styles.label}>Notas</Text>
        <TextInput
          style={styles.input}
          value={formData.notas}
          onChangeText={(text) => handleInputChange('notas', text)}
          placeholder="Adicionar notas"
          multiline
        />

        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={handleSubmit}
        >
          <Text style={styles.createText}>Salvar Tarefa</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateTask;
