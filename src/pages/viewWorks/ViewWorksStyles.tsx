import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0F0F0',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F3AE24',
    textAlign: 'center',
    paddingTop: 40

  },
  card: {
    backgroundColor: '#F3AE24',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 30
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold'
  },
  noDataText: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    width: '100%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;