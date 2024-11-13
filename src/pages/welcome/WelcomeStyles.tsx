import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ff914d'
    },
    containerLogo: {
        flex: 1,
        backgroundColor: '#ff914d',
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerForm: {
        flex: 2,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '55%',
        paddingEnd: '55%'

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
      
    },
    text: {
        color: 'black'

    },
    button: {
        position: 'absolute',
        backgroundColor: '#fdb203',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'

    }
})

export default styles;