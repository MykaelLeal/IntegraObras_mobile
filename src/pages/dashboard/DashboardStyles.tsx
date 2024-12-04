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
        backgroundColor: '#eb7228'




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
            flex: 1,
            width: '90%',
            backgroundColor: '#ff6f19',
            borderRadius: 18,
            marginLeft: 20,
            marginRight: 20,
            padding: 20


    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 5
         

    },
    subTitle: {
        fontSize: 18,
        color: '#fff',
        paddingBottom: 5


    },
    textprogress: {
        fontSize: 13,
        color: '#fff',
        paddingBottom: 8,


    },
    textdata: {
        color: '#fff',
        fontSize: 13,
        paddingTop: 15


    },
    text: {
        color: '#fff',
        fontSize: 13,
        paddingBottom: 8

    },
    content: {
        flex: 1,
        width: '100%'

    },
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
      },
      iconContainer: {
        alignItems: 'center', 
      },
    













})



export default styles;