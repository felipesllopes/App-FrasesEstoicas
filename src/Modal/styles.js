import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    tittle: {
        fontSize: 28,
        color: 'white',
        marginTop: 26,
        marginBottom: 10,
    },
    image: {
        width: 85,
        height: 85,
        marginBottom: 10,
    },
    frase: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        flex: 1.55,
        textAlignVertical: 'bottom',
        marginHorizontal: 3,
    },
    container2: {
        flex: 2,
        width: '100%'
    },
    buttonCompartilhar: {
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 7,
        alignItems: 'center',
        // marginTop: 5,
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    areaButtons: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonMudar: {
        backgroundColor: 'orange',
        paddingHorizontal: 12,
        borderRadius: 10,
        paddingVertical: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonVoltar: {
        backgroundColor: 'orange',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 3,
    },
    textButton: {
        fontSize: 23,
        textAlign: 'center',
    },
})

export default styles;