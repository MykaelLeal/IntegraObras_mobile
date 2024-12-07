import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,

    },
    headerContainer: {
      width: '100%',
      backgroundColor: '#fff',
      flex: 0.3,
      marginBottom: 15,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    title: {
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
    statusInput: {
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
    buttonCreate: {
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
    selectedImage: {
      width: 150, // Largura da imagem
      height: 150, // Altura da imagem
      borderRadius: 15, // Bordas arredondadas para um visual mais suave
      borderWidth: 2, // Borda para a imagem
      borderColor: '#ddd', // Cor da borda (cinza claro)
      marginTop: 10, // Margem superior para separar a imagem de outros elementos
    },

  });

  export default styles;
  