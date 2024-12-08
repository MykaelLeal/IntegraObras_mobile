import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
  
      },
      title: {
          fontWeight: 'bold',
          padding: 5,
          color: '#F3AE24',
          fontSize: 22,
          textAlign: 'center', 
          paddingTop: 40
            
    
        },
      headerContainer: {
        width: '100%',
        flex: 0.3,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center', 
      },
      cardContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 8,
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
      buttonAddReport: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
      },
      noReportContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9', 
        borderRadius: 10,  
        margin: 20, 
      },
  
      noReportText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
      },
      buttonDelete: {
        backgroundColor: "#FF3B3B", 
        padding: 15,
        borderRadius: 8,
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center", 
        marginTop: 20,
      },
      buttonUpdate: {
        backgroundColor: "#4CAF50", 
        padding: 15,
        borderRadius: 8,
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
      },
      icon: {
        marginRight: 10, 
      },
      buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
      },
      actionButtonsContainer: {
        flexDirection: "row", // Coloca os botões lado a lado
        justifyContent: "space-between", // Adiciona espaço entre os botões
        marginTop: 10,
      },
      buttonSmall: {
        flexDirection: "row", // Ícone e texto lado a lado
        alignItems: "center", // Centraliza o ícone e o texto
        backgroundColor: "#007BFF", // Cor do botão
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 5, // Espaçamento lateral entre os botões
      },
      buttonSmallDelete: {
        flexDirection: "row", // Ícone e texto lado a lado
        alignItems: "center", // Centraliza o ícone e o texto
        backgroundColor: "red", // Cor do botão
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 5, // Es

      },
      buttonSmallText: {
        color: "#FFFFFF",
        fontSize: 10,
        marginLeft: 5, 
     
      },
      ButtonActionText: {
        color: '#fff'
      }
});
   
      
  
  
export default styles;
    