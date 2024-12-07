import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../../routes/Routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

import styles from './ReportStyles';

type ReportScreenStackNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Task'>;

const Report = () => {
  const navigation = useNavigation<ReportScreenStackNavigationProp>();
  const [taskData, setTaskData] = useState<any[]>([]);

  // Carrega os dados do AsyncStorage
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('taskData');
        if (storedData) {
          setTaskData(JSON.parse(storedData));
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados do relatório.');
      }
    };

    loadData();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Relatório de Tarefas</Text>

      <ScrollView style={styles.scrollView}>
        {taskData.length > 0 ? (
          taskData.map((task, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{task.nome}</Text>
              <Text style={styles.cardText}>Descrição: {task.descricao}</Text>
              <Text style={styles.cardText}>Data Início: {task.dataInicio}</Text>
              <Text style={styles.cardText}>Data Final: {task.dataFinal}</Text>
              <Text style={styles.cardText}>Responsável: {task.responsavel}</Text>
              <Text style={styles.cardText}>Status: {task.status}</Text>
              <Text style={styles.cardText}>Prioridade: {task.prioridade}</Text>
              <Text style={styles.cardText}>
                Materiais Necessários: {task.materialNecessario}
              </Text>
              <Text style={styles.cardText}>Observações: {task.observacoes}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>Nenhum relatório disponível.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Report;

