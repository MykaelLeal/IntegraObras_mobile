import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../routes/Routes';


import * as Animatable from 'react-native-animatable';
import styles from './RegisterStyles';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const Register = () => {
    const navigation = useNavigation<RegisterScreenNavigationProp>();

    return(
        <View style={styles.container}>
            <Animatable.View animation= 'slideInDown' delay={500} style={styles.containerHeader}>
                <Text>Cadastro</Text>
            </Animatable.View>

            <Animatable.View  delay={600} animation= 'fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                   placeholder="Digite seu email..."
                   style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                   placeholder="Digite sua senha..."
                   style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.buttonRegister}
                  onPress={ () => navigation.navigate('Login')}
                  >
                    <Text style={styles.registerText}>Não possui conta? Cadastra-se</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    
)};

export default Register;