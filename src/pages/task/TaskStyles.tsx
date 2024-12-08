import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      padding: 10,

    },
    headerContainer: {
      width: '100%',
      backgroundColor: '#f0f0f0',
      flex: 0.3,
      marginBottom: 15,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    title: {
      fontWeight: 'bold',
      padding: 5,
      color: '#F3AE24',
      fontSize: 22,
      textAlign: 'center', 
      paddingTop: 40
        

    },
    titleCreate: {
      fontWeight: 'bold',
      padding: 5,
      color: '#eb7228',
      fontSize: 22,
      textAlign: 'center', 
      paddingTop: 40

    },
    formContainer: {
      backgroundColor: '#fff',
      padding: 15,
    

    },
    label: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#adada',
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      backgroundColor: '#fff',
      marginBottom: 15,
    },
    dataCalendary: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    picker: {
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
      backgroundColor: '#f9f9f9',
      color: '#333',
      fontSize: 16,
      marginBottom: 15,
      marginTop: 5


    },
    inputContainer: {
      flex: 1,
      marginRight: 10, 
    },
    inputData: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      backgroundColor: '#fff',
    },
    buttonSubmit: {
        backgroundColor: 'green',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'


    },
    imageContainer: {
      width: 200,
      height: 200,
      borderRadius: 10,

    },
    button: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
      width: 200



    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 14,

    },
    cardContainer: {
      backgroundColor: '#f0f0f0',
      padding: 16,
      borderRadius: 10,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    cardText: {
      fontSize: 16,
      marginBottom: 5,
    },
    buttonAddTask: {
      backgroundColor: '#007BFF',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 16,
    },
    buttonUpdate: {
      backgroundColor: '#FF9800',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 8,
    },
    buttonDelete: {
      backgroundColor: '#f44336',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 8,
    },
    noTaskContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f9f9f9', 
      borderRadius: 10,  
      margin: 20,  
    },

    noTaskText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
    },
  });
 
    


  export default styles;
  