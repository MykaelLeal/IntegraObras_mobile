

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
        container: {
            flex: 1,
            backgroundColor: '#ff914d',
            justifyContent: 'center',
            alignItems: 'center',
        },
        containerLogo: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            
        },
        logoContainer: {
            width: '100%', 
            height: '100%', 
            justifyContent: 'center', 
            alignItems: 'center',
          },
          logoImage: {
            width: '100%', 
            height: '100%', 
            resizeMode: 'contain', 
          },
        containerForm: {
            flex: 2,
            backgroundColor: '#FFF',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: 20,
        },
        title: {
            fontSize: 23,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingBottom: 20
        },
        text: {
            color: 'black',
            marginBottom: 20,
            textAlign: 'center',
        },
        button: {
            backgroundColor: '#fdb203',
            borderRadius: 50,
            paddingVertical: 12,
            width: '60%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
        },
        buttonText: {
            fontSize: 18,
            color: '#FFF',
            fontWeight: 'bold',
        }
})
 

export default styles;