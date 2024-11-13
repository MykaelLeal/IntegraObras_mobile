import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: '#ff914d'

    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'

    },
    title: {
        fontSize: 20,
        marginTop: 28
    
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16

    },
    button: {
        backgroundColor: 'orange',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    
    },
    registerText: {
        color: '#a1a1a1'

    }

});

export default styles;