import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../routes/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import styles from './LoginStyles';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  // States to manage form input
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');

  // Validate email and password function
  const validateLogin = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userData');
      if (storedData) {
        const userData = JSON.parse(storedData);

        if (userData.email === email && userData.cnpj === cnpj && userData.senha === senha) {
          // Successfully logged in
          navigation.navigate('Work'); // Replace 'Work' with your next screen
        } else {
          Alert.alert("Erro", "Credenciais inválidas.");
        }
      } else {
        Alert.alert("Erro", "Nenhum dado encontrado. Faça o cadastro.");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao verificar dados de login.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.View animation="flipInY" style={styles.logo}>
          <Image style={styles.logoImage} source={require('../../assets/logo.png')} />
        </Animatable.View>
        <Text style={styles.titleLogo}>Login</Text>
      </View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          placeholder="CNPJ da Empresa"
          style={styles.input}
          value={cnpj}
          onChangeText={(text) => setCnpj(text)}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Senha"
          style={styles.input}
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={validateLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>Não possui conta? Cadastra-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Login;
