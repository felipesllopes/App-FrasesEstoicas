import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 24,
    },
    tittle: {
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 70,
        paddingBottom: 40,
        color: 'white',
    },
    button: {
        backgroundColor: '#CF9618',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 100,
        borderWidth: 2,
        borderColor: 'black',
    },
    textButton: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modal: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
    },
})

export default styles;