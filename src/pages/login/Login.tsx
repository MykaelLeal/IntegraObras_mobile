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
          
        />

        <TextInput
          placeholder="CNPJ da Empresa"
          style={styles.input}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity 
         style={styles.button}
          onPress={() => navigation.navigate('ViewWorks')}>
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
