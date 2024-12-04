import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from "../../routes/Routes";

import styles from "./WorkStyles";

type TaskScreenStackNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Work'>;

const Task = () => {
    const navigation = useNavigation<TaskScreenStackNavigationProp>();

    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        dataInicio: '',
        dataFinal: '',
        contratante: '',
        endereco: '',
        numeroContrato: '',
    });

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
            // Você pode navegar para outra tela após salvar os dados
            navigation.navigate('Dashboard');
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Cadastro de Tarefas</Text>
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
                />

                <View style={styles.dataCalendary}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Data Início</Text>
                        <TextInput
                            style={styles.inputData}
                            placeholder="DD/MM/AAAA"
                            keyboardType="numeric"
                            value={formData.dataInicio}
                            onChangeText={(text) => handleInputChange('dataInicio', text)}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Data Final</Text>
                        <TextInput
                            style={styles.inputData}
                            placeholder="DD/MM/AAAA"
                            keyboardType="numeric"
                            value={formData.dataFinal}
                            onChangeText={(text) => handleInputChange('dataFinal', text)}
                        />
                    </View>
                </View>

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

                <Text style={styles.label}>Número do Contrato</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o número do contrato"
                    value={formData.numeroContrato}
                    onChangeText={(text) => handleInputChange('numeroContrato', text)}
                />

                <TouchableOpacity style={styles.buttonCreate} onPress={handleFinalizar}>
                    <Text style={styles.createText}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Task;
