import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../../routes/Routes";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./DashboardStyles";

type DashboardScreenStackNavigationProp = NativeStackNavigationProp<RootStackParamList, "Dashboard">;

const Dashboard = () => {
  const navigation = useNavigation<DashboardScreenStackNavigationProp>();

  return (
    <ScrollView style={styles.Container}>

      <View style={styles.headerContainer}>
        <Text style={styles.textWelcome}>Bem-vindo(a)</Text>
        <Text style={styles.textName}>Mykael Leal</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
           style={styles.card}
            onPress={() => navigation.navigate("ViewTask")}
          >
          <Icon name="check-square" size={70} color="#F3AE24" />
          <Text style={styles.cardText}>Tarefas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity
           style={styles.card}
            onPress={() => navigation.navigate("ViewReport")}
          >
          <Icon name="tasks" size={70} color="#F3AE24" />
          <Text style={styles.cardText}>Relatórios</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default Dashboard;
