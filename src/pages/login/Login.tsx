import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../routes/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import styles from './LoginStyles';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  
  const [email, setEmail] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  // Use effect to check if the user is already logged in
  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedCnpj = await AsyncStorage.getItem('cnpj');
      
      if (storedEmail && storedCnpj) {
        // If logged in, navigate directly to 'ViewWorks'
        navigation.navigate('ViewWorks');
      }
    };

    checkIfLoggedIn();
  }, [navigation]);

  const validateLogin = () => {
    if (!email || !cnpj || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Email inválido');
      return;
    }

    const cnpjClean = cnpj.replace(/\D/g, '');
    if (cnpjClean.length !== 14 || isNaN(Number(cnpjClean))) {
      Alert.alert('Erro', 'CNPJ inválido');
      return;
    }

    if (senha.length < 8) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres');
      return;
    }

    AsyncStorage.setItem('email', email);
    AsyncStorage.setItem('cnpj', cnpj);

    navigation.navigate('ViewWorks');
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
          onChangeText={setEmail}
        />

        <TextInputMask
          type={'cnpj'} 
          placeholder="CNPJ"
          style={styles.input}
          value={cnpj}
          onChangeText={setCnpj}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={validateLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>Não possui conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Login;
