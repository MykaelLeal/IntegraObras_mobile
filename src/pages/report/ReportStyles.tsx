import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      marginTop: 40,
      color: '#eb7228'

    },
    scrollView: {
      marginBottom: 16,
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    cardText: {
      fontSize: 14,
      marginBottom: 4,
      color: '#555555',
    },
    noDataText: {
      fontSize: 16,
      textAlign: 'center',
      color: '#888888',
    },
  });


export default styles;