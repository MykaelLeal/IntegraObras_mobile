import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from "../../routes/Routes";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from "./ViewTaskStyles";

import Icon from "react-native-vector-icons/FontAwesome";

type ViewTaskScreenStackNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ViewTask'>;

const ViewTask = () => {
  const navigation = useNavigation<ViewTaskScreenStackNavigationProp>();
  const [formData, setFormData] = useState<any>(null);
  const [taskExists, setTaskExists] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('taskData');
        if (savedData) {
          setFormData(JSON.parse(savedData));
          setTaskExists(true);  
        }
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    loadData();
  }, []);

  const handleUpdate = () => {
    navigation.navigate('CreateTask');
  };

  const handleExcluir = async () => {
    try {
      await AsyncStorage.removeItem('taskData');
      setFormData(null);
      setTaskExists(false);
      console.log('Tarefa excluída com sucesso');
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Tarefas</Text>
      </View>

      {!taskExists ? (
        <View style={styles.noTaskContainer}>
          <Text style={styles.noTaskText}>Não há tarefas</Text>
          <TouchableOpacity
            style={styles.buttonAddTask}
            onPress={() => navigation.navigate('CreateTask')}
          >
            <Text style={styles.createText}>Adicionar Tarefa</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Tarefa: {formData.titulo}</Text>
          <Text>Descrição: {formData.descricao}</Text>
          <Text>Data Criação: {formData.dataCriacao}</Text>
          <Text>Responsável: {formData.responsavel}</Text>
          <Text>Status: {formData.status}</Text>
          <Text>Prioridade: {formData.prioridade}</Text>
          <Text>Notas: {formData.notas}</Text>

          <View style={styles.actionButtonsContainer}>
                <TouchableOpacity style={styles.buttonSmall} onPress={handleUpdate}>
                    <Icon name="refresh" size={16} color="#FFFFFF" />
                    <Text style={styles.buttonSmallText}>Atualizar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSmallDelete} onPress={handleExcluir}>
                    <Icon name="trash" size={16} color="#FFFFFF" />
                    <Text style={styles.buttonSmallText}>Excluir</Text>
                </TouchableOpacity>
                </View>
        </View>
      )}
    </ScrollView>
  );
};

export default ViewTask;
