import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({

    Container: {
        flex: 1,
        backgroundColor: '#f0f0f0',

    },
    headerContainer: {
        flex: 0.3,
        justifyContent: 'flex-start', 
        paddingHorizontal: 5, 
        backgroundColor: '#f9f9f9',
        paddingTop: 70,
        paddingBottom: 30,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
       
       

    },
    textWelcome: {
        fontSize: 20,
        color: '#F3AE24',
        fontWeight: 'bold',
        paddingLeft: 30,
        paddingTop: -10
        


    },
    textName: {
        fontSize: 18,
        color: '#F3AE24',
        paddingLeft: 30


    },
    
    card: {
        backgroundColor: '#FFF',
        width: '90%',
        height: 200,
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'center',  
        alignItems: 'center',    
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,

    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 8
    },
    section: {
        marginTop: 30
    }

    });



export default styles;