import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
    },
    image: {
        height: Dimensions.get('screen').height / 3
    },
    textHeader: {
        fontSize: 25,
        fontWeight: "bold",
        color: "brown",
    },
    textHeader1: {
        color: "black",
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 10
    },
    button: {
        backgroundColor: "red",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 10
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center'
    },
    description:{
        color: "black",
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 10
    },
    scroll: {
        backgroundColor: "white",
        padding: 10
    },
    instruction: {
        fontSize: 18,
        color: "black",
        textAlign: "justify"
    },
    text_button: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})