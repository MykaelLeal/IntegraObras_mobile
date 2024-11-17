import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({

    homeContainer: {
        flex: 1,
        backgroundColor: '#fff',

    },
    barContainer: {
        flexDirection: 'row', 
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        paddingHorizontal: 20,
        paddingVertical: 10, 
        height: '12%',
        backgroundColor: 'orange'




    },
    headerContainer: {
        width: '100%',
        flex: 0.3,
        justifyContent: 'flex-start', 
        paddingHorizontal: 5, 
        backgroundColor: '#fff',
        paddingTop: 30
       
       

    },
    logo: {
        width: 60, 
        height: 70,
        marginLeft: 65,
        paddingTop: 20
       
       
        

    },
    logoImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        

    },
    textLogo: {
        fontSize: 18,
        color: '#FFF', 
        fontWeight: 'bold',
        flexDirection: 'row', 
        paddingTop: 20,
        marginLeft: -10,
       
       
       
    },
    nameContainer: {
        width: '100%',
        backgroundColor: '#fff',
       

    },
    textWelcome: {
        fontSize: 20,
        color: 'orange',
        fontWeight: 'bold',
        paddingLeft: 30,
        paddingTop: -10
        


    },
    textName: {
        fontSize: 18,
        color: 'orange',
        paddingLeft: 30


    },
    projectsContainer: {
            width: '80%',
            height: 30, 
            backgroundColor: 'lightblue', 
            borderRadius: 10,
            borderWidth: 0.5, // Largura da borda
            marginHorizontal: 40


    },
    card: {
        width: '100%',
        backgroundColor: 'orange',
         

    },
    cardImage: {

    },
    cardText: {

    },
    shortcut: {

    },
    imageUrl: {

    },

    













})



export default styles;