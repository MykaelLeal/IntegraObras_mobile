import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from "../../routes/Routes";
import { Picker } from "@react-native-picker/picker";

import styles from './TaskStyles'

type TaskScreenStackNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Task'>;

const Task = () => {
    const navigation = useNavigation<TaskScreenStackNavigationProp>();

    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        dataInicio: '',
        dataFinal: '',
        responsavel: '',
        status: '',
        prioridade: '',
        materialNecessario: '',
      });

      const formatData = (data: string) => {
        const apenasNumeros = data.replace(/\D/g, '');
    
        const formatada = apenasNumeros
          .replace(/^(\d{2})(\d)/, '$1/$2') // Adiciona a primeira barra após o dia
          .replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3'); // Adiciona a segunda barra após o mês
      
        // Limita a data a 10 caracteres no formato DD/MM/AAAA
        return formatada.substring(0, 10);
      };
    
      // Recuperando os dados salvos no AsyncStorage quando o componente é montado
      useEffect(() => {
        const loadData = async () => {
          try {
            const savedData = await AsyncStorage.getItem('taskData');
            if (savedData) {
              setFormData(JSON.parse(savedData)); // Carrega os dados salvos
            }
          } catch (error) {
            console.error('Erro ao carregar os dados:', error);
          }
        };
    
        loadData();
      }, []);
    
      const handleInputChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
      };
    
      const handleFinalizar = async () => {
        try {
          // Salvando os dados no AsyncStorage
          await AsyncStorage.setItem('taskData', JSON.stringify(formData));
          console.log('Dados salvos com sucesso');
          // Navega para outra tela após salvar os dados
          navigation.navigate('Dashboard');
        } catch (error) {
          console.error('Erro ao salvar os dados:', error);
        }
      };
    
      return (
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Criar Tarefas</Text>
          </View>
    
          <View style={styles.formContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={formData.nome}
              onChangeText={(text) => handleInputChange('nome', text)}
            />
    
            <Text style={styles.label}>Descrição</Text>
            <TextInput
              style={styles.input}
              value={formData.descricao}
              onChangeText={(text) => handleInputChange('descricao', text)}
              multiline
            />
    
            <View style={styles.dataCalendary}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Data Início</Text>
                <TextInput
                  style={styles.input}
                  placeholder="DD/MM/AAAA"
                  keyboardType="numeric"
                  value={formData.dataInicio}
                  onChangeText={(text) => handleInputChange('dataInicio', formatData(text))}
                />
              </View>
    
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Data Final</Text>
                <TextInput
                  style={styles.input}
                  placeholder="DD/MM/AAAA"
                  keyboardType="numeric"
                  value={formData.dataFinal}
                  onChangeText={(text) => handleInputChange('dataFinal', formatData(text))}
                />
              </View>
            </View>
    
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
              <Picker.Item label="Finalizada" value="Finalizada" />
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
    
            <Text style={styles.label}>Materiais Necessários</Text>
            <TextInput
              style={styles.input}
              value={formData.materialNecessario}
              onChangeText={(text) => handleInputChange('materialNecessario', text)}
              placeholder="Lista de materiais"
            />
    
            <TouchableOpacity style={styles.buttonCreate} onPress={handleFinalizar}>
              <Text style={styles.createText}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    };

export default Task;