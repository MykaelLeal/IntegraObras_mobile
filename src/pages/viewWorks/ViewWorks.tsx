import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/Routes";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './ViewWorksStyles';

type ViewWorkScreenStackNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ViewWorks'>;

const ViewWorks = () => {
  const navigation = useNavigation<ViewWorkScreenStackNavigationProp>();
  const [works, setWorks] = useState<any[]>([]); // Para armazenar as obras

  // Função para carregar as obras do AsyncStorage
  const loadWorks = async () => {
    try {
      const storedWorks = await AsyncStorage.getItem('works');
      if (storedWorks) {
        setWorks(JSON.parse(storedWorks)); // Converte de volta para o formato de array
      }
    } catch (error) {
      console.error('Erro ao carregar as obras', error);
    }
  };

  // Função para adicionar uma nova obra no AsyncStorage
  const addWork = async (newWork: any) => {
    try {
      const updatedWorks = [...works, newWork];
      await AsyncStorage.setItem('works', JSON.stringify(updatedWorks)); // Salva o array atualizado no AsyncStorage
      setWorks(updatedWorks); // Atualiza o estado com as obras recém-adicionadas
    } catch (error) {
      console.error('Erro ao adicionar a obra', error);
    }
  };

  // UseEffect para carregar as obras ao montar o componente
  useEffect(() => {
    loadWorks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>IntegraObras</Text>
      <ScrollView style={styles.worksContainer}>
        {/* Renderizando os cards das obras */}
        {works.map((work) => (
          <TouchableOpacity
            key={work.id}
            style={styles.card}
            onPress={() => navigation.navigate('Dashboard', { workId: work.id })} // Navegação com id da obra
          >
            <Text style={styles.cardTitle}>{work.name}</Text>
            <Text style={styles.cardText}>Status: {work.status}</Text>
            <Text style={styles.cardText}>Localização: {work.location}</Text>
          </TouchableOpacity>
        ))}

        {/* Botão de Adicionar Obra */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Aqui você pode abrir um modal ou outra tela para adicionar a obra
            const newWork = { 
              id: Date.now(), // Usando timestamp como id único
              name: "Nova Obra", 
              status: "Em andamento", 
              location: "Localização nova"
            };
            addWork(newWork); // Adiciona a obra ao AsyncStorage e ao estado
          }}
        >
          <Text style={styles.buttonText}>+ Adicionar Obra</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ViewWorks;

