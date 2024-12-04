import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../../routes/Routes";

import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';

import * as Animatable from 'react-native-animatable';
import styles from "./DashboardStyles";

type DashboardScreenStackNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;


const Dashboard = () => {
    const stackNavigation = useNavigation<DashboardScreenStackNavigationProp>();
    const navigation = useNavigation()

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
                <Text style={styles.title}>Edificio Raiar do Sol</Text>
                <Text style={styles.subTitle}>Unidade 123B</Text>
                <Text style={styles.text}>Rua Mariano Peixoto</Text>
                <Text style={styles.text}>Cidade: Campina Grande | PB</Text>
                <Text style={styles.textprogress}>Andamento da obra 50%</Text>
                <Progress.Bar progress={0.5} width={280} height={10}  borderRadius={5} color="#fff" />
                <Text style={styles.textdata}>Início: 14/12/2024 - Previsão: 20/06/2025</Text>
              </ScrollView>

              <View style={styles.content}>
                <Icon style={{ paddingTop: 20}}name="bars" size={28} color="#000" />
              </View>

              <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.iconContainer}
                    //onPress={() => navigation.navigate('Tela1')} 
                  >
                    <Icon name="briefcase" size={40} color="#000" />
                    <Text>Home</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.iconContainer}
                    //onPress={() => navigation.navigate('Tela2')} 
                  >
                    <Icon name="fa-duotone fa-solid fa-list-dropdown" size={40} color="#000" />
                    <Text>Configurações</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.iconContainer}
                    //onPress={() => navigation.navigate('Tela3')}
                  >
                    <Icon name="file-alt" size={40} color="#000" />
                    <Text>Info</Text>
                  </TouchableOpacity>
                </View>
            
              
          </View>

  )};

export default Dashboard;

