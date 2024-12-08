import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../routes/Routes';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './RegisterStyles';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const Register: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const [nome, setNome] = useState<string>('');
  const [razaoSocial, setRazaoSocial] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const formatCNPJ = (value: string): string => {
    return value
      .replace(/\D/g, '') 
      .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
      .slice(0, 18); 
  };

  const validateRegister = () => {
    if (!nome || !razaoSocial || !cnpj || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Email inválido');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }

    AsyncStorage.setItem('nome', nome);
    AsyncStorage.setItem('razaoSocial', razaoSocial);
    AsyncStorage.setItem('email', email);
    AsyncStorage.setItem('cnpj', cnpj);

    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
      { text: 'OK', onPress: () => navigation.navigate('Login') }
    ]);
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
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          placeholder="Razão social"
          style={styles.input}
          value={razaoSocial}
          onChangeText={setRazaoSocial}
        />

        <TextInput
          style={styles.input}
          value={cnpj}
          onChangeText={(text) => setCnpj(formatCNPJ(text))}
          keyboardType="default"
          placeholder="00.000.000/0000-00"
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Senha"
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={validateRegister}>
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
