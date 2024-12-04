import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,

    },
    headerContainer: {
        flex: 0.3,
        width: '100%',
        backgroundColor: '#eb7228',
        marginBottom: 50
        

    },
    title: {
        fontWeight: 'bold',
        padding: 5,
        color: '#fff',
        fontSize: 16

    },
    formContainer: {
      backgroundColor: '#fff',
      padding: 15,
    

    },
    label: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
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



    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    selectedImage: {
      width: 250, // Largura da imagem
      height: 250, // Altura da imagem
      borderRadius: 15, // Bordas arredondadas para um visual mais suave
      borderWidth: 2, // Borda para a imagem
      borderColor: '#ddd', // Cor da borda (cinza claro)
      marginTop: 10, // Margem superior para separar a imagem de outros elementos
    },

  });

  export default styles;
  