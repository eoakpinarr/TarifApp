import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        margin: 5
    },
    image: {
        height: Dimensions.get('screen').height / 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    name_container: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#424242',
        opacity: 0.8,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    name: {
        textAlign: 'right',
        fontSize: 20,
        color: '#fff',
        padding: 5,
        fontWeight: '600'
    },
})