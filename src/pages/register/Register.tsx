import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../routes/Routes';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './RegisterStyles';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const Register = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  // States to manage form input
  const [formData, setFormData] = useState({
    nome: '',
    razaoSocial: '',
    cnpj: '',
    email: '',
    senha: ''
  });

  // Handle input change
  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Validation function
  const validateForm = () => {
    if (!formData.nome || !formData.razaoSocial || !formData.cnpj || !formData.email || !formData.senha) {
      Alert.alert("Erro", "Todos os campos precisam ser preenchidos.");
      return false;
    }

    // Basic Email Validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert("Erro", "Por favor, insira um e-mail válido.");
      return false;
    }

    // Basic CNPJ Validation (just a simple length check for this example)
    if (formData.cnpj.length !== 14) {
      Alert.alert("Erro", "CNPJ inválido. O CNPJ deve ter 14 caracteres.");
      return false;
    }

    return true;
  };

  // Handle form submit
  const handleRegister = async () => {
    if (validateForm()) {
      try {
        // Save data to AsyncStorage
        await AsyncStorage.setItem('userData', JSON.stringify(formData));

        // Navigate to profile or dashboard screen
        navigation.navigate('Profile');
      } catch (error) {
        Alert.alert("Erro", "Erro ao salvar os dados.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.View animation="flipInY" style={styles.logo}>
          <Image style={styles.logoImage} source={require('../../assets/logo.png')} />
        </Animatable.View>
        <Text style={styles.titleLogo}>Criar conta</Text>
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={formData.nome}
          onChangeText={(text) => handleInputChange('nome', text)}
        />

        <TextInput
          placeholder="Razão social"
          style={styles.input}
          value={formData.razaoSocial}
          onChangeText={(text) => handleInputChange('razaoSocial', text)}
        />

        <TextInput
          placeholder="CNPJ"
          style={styles.input}
          value={formData.cnpj}
          onChangeText={(text) => handleInputChange('cnpj', text)}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />

        <TextInput
          placeholder="Senha"
          style={styles.input}
          value={formData.senha}
          onChangeText={(text) => handleInputChange('senha', text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.registerText}>Já possui conta? Login</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Register;
