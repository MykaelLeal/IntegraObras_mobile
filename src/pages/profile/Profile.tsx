import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const Profile = ({ route }) => {
    const { userData } = route.params; // Dados vindos do registro

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>

            <Text style={styles.label}>Nome</Text>
            <Text style={styles.value}>{userData.name}</Text> {/* Exibe o nome */}

            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{userData.email}</Text> {/* Exibe o email */}

            <Text style={styles.label}>Telefone</Text>
            <Text style={styles.value}>{userData.phone}</Text> {/* Exibe o telefone */}

            <Text style={styles.label}>Endereço</Text>
            <Text style={styles.value}>{userData.address}</Text> {/* Exibe o endereço */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    value: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 5,
    },
});

export default Profile;
