import { StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 25,
        color: 'black',
        margin: 10,
        padding: 10
    }
})