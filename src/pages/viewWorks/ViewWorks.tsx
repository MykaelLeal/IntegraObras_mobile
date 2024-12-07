import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/Routes';

import styles from './ViewWorksStyles';

type ViewWorkScreenStackNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Work'>;

const ViewWorks = () => {
  const navigation = useNavigation<ViewWorkScreenStackNavigationProp>();
  const [workData, setWorkData] = useState<any>(null); // Estado para armazenar os dados da obra

  // Função para carregar os dados do AsyncStorage
  const loadWorkData = async () => {
    try {
      const storedWorkData = await AsyncStorage.getItem('workData');
      console.log('Dados carregados do AsyncStorage:', storedWorkData); // Adicionando log
      if (storedWorkData) {
        setWorkData(JSON.parse(storedWorkData)); // Converte os dados do AsyncStorage para o formato original
      } else {
        console.log('Nenhum dado encontrado no AsyncStorage.');
      }
    } catch (error) {
      console.error('Erro ao carregar os dados da obra', error);
    }
  };

  // useEffect para carregar os dados ao montar o componente
  useEffect(() => {
    loadWorkData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>IntegraObras</Text>
      </View>

      {workData ? (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Task')} // Navega para a tela de Dashboard
        >
          <Text style={styles.cardTitle}>{workData.nome}</Text>
          <Text style={styles.cardText}>Endereço: {workData.endereco}</Text>
          <Text style={styles.cardText}>Status: {workData.status}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.noDataText}>Não há dados de obra disponíveis.</Text>
      )}

      {/* Navegar para a tela de Work para editar ou adicionar nova obra */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Work')}
      >
        <Text style={styles.buttonText}>+ Adicionar obra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ViewWorks;


 