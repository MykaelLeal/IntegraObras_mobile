import React from "react";
import { View, Text, Image, ProgressBarAndroidBase, ScrollView } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../routes/Routes';
import Icon from 'react-native-vector-icons/FontAwesome';


import * as Animatable from 'react-native-animatable';
import styles from "./HomeStyles";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


'OBS: Fazendo...'
const Home = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (

        <View style={styles.homeContainer}>

            <View style={styles.barContainer}>
              <Icon style={{ paddingTop: 20}}name="bars" size={22} color="#FFF" />
                <Animatable.View 
                        animation='flipInY'
                        style={styles.logo}
                        >
                        <Image
                        style={styles.logoImage}
                        source={require('../../assets/logo.png')}
                        />
                    </Animatable.View>
                    <Text style={styles.textLogo}>IntegraObras</Text>
            </View>

            
           <View style={styles.headerContainer}>
             <Text style={styles.textWelcome}>Bem-vindo(a)</Text>
             <Text style={styles.textName}>Mykael Leal</Text>     
            </View>
          
            
            <ScrollView style={styles.projectsContainer}>
               <Text>Edificio Raiar do Sol</Text>
               <Text>Unidade 123B</Text>
               <Text>Rua Mariano Peixoto</Text>
               <Text>Cidade: Campina Grande | PB</Text>
               <Text>Andamento da obra</Text>

               <Text>Início: 14/12/2024 - Previsão: 20/06/2025</Text>
                


            </ScrollView>
           
        </View>

)};

export default Home;

