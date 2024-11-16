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

             <View style={styles.containerLogo}>
                <Animatable.View 
                    animation='flipInY'
                    style={styles.logo}
                    >
                    <Image 
                        style={styles.logoImage}
                        source={require('../../assets/logo.png')}
                    />
                </Animatable.View>
                  <Text style={styles.titleLogo}>Cadastro</Text>
             </View>

            <Animatable.View  delay={600} animation= 'fadeInUp' style={styles.containerForm}>
                <TextInput
                   placeholder="Nome"
                   style={styles.input}
                />

                <TextInput
                   placeholder="Email"
                   style={styles.input}
                />

                <TextInput
                   placeholder="Senha"
                   style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.buttonRegister}
                  onPress={ () => navigation.navigate('Login')}
                  >
                    <Text style={styles.registerText}>Já possui conta? Login</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    
)};

export default Register;