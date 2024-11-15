import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: '#fff',
       

    },
    containerLogo: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    logo: {
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: 30

      },
      logoImage: {
        width: '70%',
        height: '100%',  
        resizeMode: 'contain', 

      },
      titleLogo: {
        fontSize: 23,
        position: 'relative',
        marginTop: -40,
        fontWeight: 'bold',
        color: 'orange'
        
      },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    
    },
    containerForm: {
       flex: 1,
       marginLeft: '5%',
       marginRight: '5%',
       marginTop: 30
       
    },
    input: {
        marginBottom: 15,
        height: 40,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000', 
        borderRadius: 4, 
        borderWidth: 1,
        padding: 10,
       

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