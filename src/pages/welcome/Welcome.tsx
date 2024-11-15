import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../routes/Routes';

import * as Animatable from 'react-native-animatable';
import styles from './WelcomeStyles';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const Welcome = () => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.View 
                   animation='flipInY'
                   style={styles.logoContainer}
                >
                   <Image 
                       style={styles.logoImage}
                       source={require('../../assets/logo.png')}
                   />
                </Animatable.View>
            </View>

            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
               <Text style={styles.title}>Monitore, organize e aumente o progresso da sua obra!</Text>
               <Text style={styles.text}>Faça o login para começar</Text>
               
               <TouchableOpacity 
                  style={styles.button}
                  onPress={() => navigation.navigate('Login')}
               >
                  <Text style={styles.buttonText}>Acessar</Text>
               </TouchableOpacity> 
            </Animatable.View>
        </View>
    );
};

export default Welcome;
