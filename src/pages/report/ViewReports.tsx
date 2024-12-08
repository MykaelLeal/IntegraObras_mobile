import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from "../../routes/Routes";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from "./ViewReportsStyles";

import Icon from "react-native-vector-icons/FontAwesome";

type ViewReportScreenStackNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ViewReport'>;

const ViewReport = () => {
  const navigation = useNavigation<ViewReportScreenStackNavigationProp>();
  const [formData, setFormData] = useState<any>(null);
  const [reportExists, setReportExists] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('reportData');
        if (savedData) {
          setFormData(JSON.parse(savedData));
          setReportExists(true);  
        }
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    loadData();
  }, []);

  const handleUpdate = () => {
    navigation.navigate('CreateReport');
  };

  const handleExcluir = async () => {
    try {
      await AsyncStorage.removeItem('reportData');
      setFormData(null);
      setReportExists(false);
      console.log('Relatório excluído com sucesso');
    } catch (error) {
      console.error('Erro ao excluir o relatório:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Relatórios</Text>
      </View>

      {!reportExists ? (
        <View style={styles.noReportContainer}>
          <Text style={styles.noReportText}>Não há relatórios</Text>
          <TouchableOpacity
            style={styles.buttonAddReport}
            onPress={() => navigation.navigate('CreateReport')}
          >
            <Text style={styles.ButtonActionText}>Adicionar Relatório</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Relatório: {formData.titulo}</Text>
          <Text>Descrição: {formData.descricao}</Text>
          <Text>Data de Criação: {formData.dataCriacao}</Text>
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

export default ViewReport;
