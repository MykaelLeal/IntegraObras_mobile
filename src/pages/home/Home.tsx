import React from "react";
import { View, Text, TextInput, StyleSheet, Image,  FlatList, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../routes/Routes';
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Animatable from 'react-native-animatable';
import styles from "./HomeStyles";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


'OBS: Fazendo...'
const Home = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const data = [
        { id: '1', text: ['Item 1'], imageUrl: 'https://via.placeholder.com/150' },
        { id: '2', text: 'Item 2', imageUrl: 'https://via.placeholder.com/150' },
        { id: '3', text: 'Item 3', imageUrl: 'https://via.placeholder.com/150' },
      ]; 

    const data2 = [
        { id: '1', },
        { id: '2', },
        { id: '3', },
      ]; 

    return (

        <View style={styles.homeContainer}>
            
           <View style={styles.headerContainer}>
                <Icon name="bars" size={20} color="#FFD43B" />
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

            <View style={styles.nameContainer}>
                <Text style={styles.textWelcome}>Bem-vindo(a)</Text>
                <Text style={styles.textName}>Mykael Leal</Text>
            </View>
            
            <ScrollView style={styles.body}>
                
                <View style={styles.projectsContainer}>
                    <FlatList
                        horizontal={true}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                        <View style={styles.card}>
                          <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
                          <Text style={styles.cardText}>{item.text[0]}</Text>
                        </View>
                            
                        )}             
                    />
                </View>

                <View style={styles.shortcut}>
                    <FlatList
                        horizontal={true}
                        data={data2}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
                        </View>
                        )}

                        />
                </View>   
            </ScrollView>
            </View>
        </View>

)};

export default Home;